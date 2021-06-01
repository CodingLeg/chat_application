import React from 'react';
import './Login.css';
import $ from 'jquery'; 


class Admin extends React.Component {
    constructor(){
        super();

        this.myRef = React.createRef();
        this.myRef1 = React.createRef();
        this.registerfn = this.registerfn.bind(this);
        this.state={
            data:[]
        };
    }


 
    registerfn(){
// eslint-disable-next-line
        if(this.myRef.current.value=='admin'&&this.myRef1.current.value=='admin'){
          localStorage.setItem("admin","admin")
            window.location.replace("/AdminDashboard")
        }
        else{
          console.log("fail")
          document.getElementById('fail').style.display='block';
          setTimeout(function() {
              $('#fail').fadeOut('fast'); 
          }, 1000);
        }
    }

    render() {
  return (
    <div>
      <div class="container1" style={{marginLeft:"25%"}} id="container1">
	<div class="form-container1 sign-up-container1">
	</div>
	<div class="form-container1 sign-in-container1">
		<form  class="form1" >
    <div id="fail"style={{display:'none'}}className="alert alert-danger alert-dismissable fade-show" role="alert">
        Invalid Email or Password
        <button type="button" class="close" data-dismiss="alert" aria-label="close"></button></div>


			<h1>Sign in</h1>
			<input type="text" ref={this.myRef}  class="input1" placeholder="UserName" />
			<input type="password" ref={this.myRef1}   class="input1" placeholder="Password" />
			<button  type="button"  class="button1" onClick={this.registerfn} >Sign In</button>
		</form>
	</div>
	<div class="overlay-container1">
		<div class="overlay">
			<div class="overlay-panel overlay-right">
				<h1>Hello, Admin!</h1>
				<p> Welcome Back,Please login with your personal info</p>
			</div>
		</div>
	</div>
</div>
  </div>

    )
}
}
export default Admin;