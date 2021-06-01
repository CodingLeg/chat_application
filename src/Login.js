import React from 'react';
import './Login.css';
import $ from 'jquery'; 

class Login extends React.Component {

    constructor(){
        super();

        this.myRef = React.createRef();
        this.myRef1 = React.createRef();
        this.myRef2 = React.createRef()
        this.myRef3=React.createRef();
        this.myRef4=React.createRef();
        this.myRef5=React.createRef();
        this.myRef6=React.createRef();
        this.myRef7=React.createRef();
        this.registerfn = this.registerfn.bind(this);
        this.loginfn = this.loginfn.bind(this);
        this.sendemail= this.sendemail.bind(this);
        this.state={
            data:[],
            register: []
        };
    }
 
      username_validation(){
        'use strict';
        var username_name = document.getElementById("name");
        var username_value = document.getElementById("name").value;
        var username_length = username_value.length;
        var letters = "[a-zA-Z0-9%*#]*$"
        if(username_length < 4 || !username_value.match(letters))
        {
        document.getElementById('uname_err').innerHTML = 'Username must be 4 chracters long.';
        username_name.focus();
        document.getElementById('uname_err').style.color = "#FF0000";
        }
       
        }
 
    

    fullname_validation(){
        'use strict';
        var username_name = document.getElementById("username");
        var username_value = document.getElementById("username").value;
        var username_length = username_value.length;
        var letters = /^[a-zA-Z]+(\s[a-zA-Z]+)?$/;
        if(username_length < 4 || !username_value.match(letters))
        {
        document.getElementById('name_err').innerHTML = 'Name should contain alphabets only.';
        username_name.focus();
        document.getElementById('name_err').style.color = "#FF0000";
        }
        
        }
 
    
        //user name validation ends /^[a-zA-Z0-9._@]+$/;
        
        
        //email validation starts
        email_validation(){
        'use strict';
        var mailformat = /^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$/;
        var email_name = document.getElementById("email");
        var email_value = document.getElementById("email").value;
        var email_length = email_value.length;
        if(!email_value.match(mailformat) || email_length === 0)
        {
        document.getElementById('email_err').innerHTML = 'This is not a valid email format.';
        email_name.focus();
        document.getElementById('email_err').style.color = "#FF0000";
        }
       
        }

     
    componentDidMount(){
        const signUpButton = document.getElementById('signUp');
      const signInButton = document.getElementById('signIn');
      const container1= document.getElementById('container1');
      
      if(signInButton){
      signUpButton.addEventListener('click', () => {
          container1.classList.add("right-panel-active");
      });
      }
      
      if(signUpButton){
      signInButton.addEventListener('click', () => {
          container1.classList.remove("right-panel-active");
      });
      }
      }
      registerfn(){
        const formData = new FormData();
      
      formData.append( "username",this.myRef5.current.value);
      formData.append( "full_name",this.myRef2.current.value);
      formData.append("password",this.myRef3.current.value);
      formData.append("email",this.myRef4.current.value);
       //formData.append( "first_name",this.myRef5.current.value);
       //formData.append( "last_name",this.myRef6.current.value);
        //formData.append( "avatar",this.myRef7.current.files[0]);
        
      
          fetch('http://localhost:8000/user/',{
              method:'Post',
             body: formData
             
          })
          .then(response=>response.json())
          .then((data)=>{
            this.setState({
                register:data
            });
            console.log(this.state.register.id)
            
            if(this.state.register.id!=null){
                document.getElementById('success').style.display='block';
                this.sendemail();

                setTimeout(function() {
                    $('#success').fadeOut('fast'); 
                    
                    window.location.reload();
                }, 1000);
            }
            else{
            if(this.state.register.username[0]=='user with this username already exists.'){
                document.getElementById('fail1').style.display='block';
                setTimeout(function() {
                    $('#fail1').fadeOut('fast'); 
                }, 1000);
            }
            if(this.state.register.email[0]=='user with this email already exists.'){
                document.getElementById('fail2').style.display='block';
                setTimeout(function() {
                    $('#fail2').fadeOut('fast'); 
                }, 1000);
            }}
           
        })
          
          .catch(error => console.error('Error:', error))
         
      
      }

      sendemail(){

          let details = {
            name: this.myRef2.current.value,
            email: this.myRef4.current.value,
            message: "You have sucessfully register for Study Group ",
          };
            let response =  fetch("http://localhost:5000/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json;charset=utf-8",
              },
              body: JSON.stringify(details),
            });
            
            let result = response.json();
            alert(result.status);
            window.location.reload();
          
      }


    loginfn(){

        fetch('http://localhost:8000/user/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
for(var i=0; i<this.state.data.length; i++){
if(this.state.data[i].email===this.myRef.current.value&&this.state.data[i].password===this.myRef1.current.value){
    localStorage.setItem("username",this.state.data[i].full_name)
    localStorage.setItem("email",this.state.data[i].email)
    localStorage.setItem("id",this.state.data[i].id)
    this.props.history.push('/UserDashboard')
    break
}
else{
    document.getElementById('fail').style.display='block';
            setTimeout(function() {
                $('#fail').fadeOut('fast'); 
            }, 1000);
}
}

  });
    }


    render() {
        return (
            <div style={{marginLeft:"25%"}}>
    
<div class="container1" id="container1">
	<div class="form-container1 sign-up-container1">
		<form  class="form1" >
        <div id="success"style={{display:'none'}}className="alert alert-success alert-dismissable fade-show" role="alert">
        Registered Successfully.
        <button type="button" class="close" data-dismiss="alert" aria-label="close"></button></div>

        <div id="fail1"style={{display:'none'}}className="alert alert-danger alert-dismissable fade-show" role="alert">
        Username already present.
        <button type="button" class="close" data-dismiss="alert" aria-label="close"></button></div>

        <div id="fail2"style={{display:'none'}}className="alert alert-danger alert-dismissable fade-show" role="alert">
        Email already registered.
        <button type="button" class="close" data-dismiss="alert" aria-label="close"></button></div>
			<h1>Register</h1>

          
            <input type="text" class="input1" ref={this.myRef5} id="name" onBlur={this.username_validation} placeholder="UserName" />
            <div id="uname_err"> </div>
            
      
			<input type="text" class="input1" ref={this.myRef2} id="username" onBlur={this.fullname_validation} placeholder="FullName" />
            <div id="name_err"> </div>

      <input type="email"  class="input1" ref={this.myRef4}  id="email" onBlur={this.email_validation} placeholder="Email" />
      <div id="email_err"> </div>

      <input type="password" class="input1" ref={this.myRef3} placeholder="Password" />
     {/* 
      <input class="input1" type="text" ref={this.myRef5} placeholder="FirstName" />
      
      <input type="text"  class="input1" ref={this.myRef6} placeholder="LastName" />
   
     
			
      <br></br>
       <input  style={{marginLeft:"30px"}} type="file"   ref={this.myRef7} placeholder="Chhose File" />
      <br></br>
        */ }
			<button  class="button1" type="button" onClick={this.registerfn}>Submit</button>
		</form>
	</div>
	<div class="form-container1 sign-in-container1">
		<form  class="form1">
        <div id="fail"style={{display:'none'}}className="alert alert-danger alert-dismissable fade-show" role="alert">
        Invalid Email or Password
        <button type="button" class="close" data-dismiss="alert" aria-label="close"></button></div>


			<h1>Sign in</h1>
			<input type="email" class="input1" ref={this.myRef} placeholder="Email" />
			<input type="password"  class="input1" ref={this.myRef1} placeholder="Password" />
      <br></br>
			
			<button   class="button1" type="button" onClick={this.loginfn}>Submit</button>
<br></br>
      <a href="Admin">Are you Admin?</a>
		</form>
	</div>
	<div class="overlay-container1">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button    class="ghost button1"  id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button    class="ghost button1" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>

    </div>
        )
    }
}
export default Login