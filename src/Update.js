import React from 'react';
import $ from 'jquery'; 
class Update extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            contact:'',
            password:'',
            username:''
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    // Input Change Handler
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    // Submit Form
    submitForm(){

        fetch('http://127.0.0.1:8000/user/'+localStorage.getItem("id")+'/',{
            method:'PUT',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
            
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));

        document.getElementById('success').style.display='block';
        setTimeout(function() {
            $('#success').fadeOut('fast'); 
        }, 1000);
        
         }

    fetchData(){

        fetch('http://127.0.0.1:8000/user/'+localStorage.getItem("id"))
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                username:data.username,
                full_name:data.full_name,
                email:data.email,
                password:data.password
            });
        });
    }

    componentDidMount(){
        this.fetchData();
        console.log(localStorage.getItem('id'));
    }

    render(){
        return (
            <>
    <div id="page-top">
  
  <div id="wrapper">
    
   
    <ul class="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div class="sidebar-brand-icon">
          <img src="https://realcoderz.com/img/cropped-logowhitetexttransparent.png"/>
        </div>

      </a>
      
      <hr class="sidebar-divider"></hr>
      <div class="sidebar-heading">
        Features
      </div>
      <li class="nav-item">
        <a class="nav-link" href="/UserDashboard">
          <i class="fas fa-fw fa-palette"></i>
          <span>Home</span>
        </a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="/CreateGroup">
          <i class="fas fa-fw fa-palette"></i>
          <span>Create Group</span>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="/Update/">
          <i class="fas fa-fw fa-palette"></i>
          <span>Update Profile</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/AllGroup/">
          <i class="fas fa-fw fa-palette"></i>
          <span>All Group</span>
        </a>
      </li>
      
      <li class="nav-item">
        <div class="nav-link" >
         
          
        <input className ="btn btn -danger"  type="button"  value="Log Out" onClick={this.logout} />
        
          
        </div>
      </li>

      


     

      <hr class="sidebar-divider"></hr>
     
     
      <li class="nav-item">
        
         
        
      </li>
      <hr class="sidebar-divider"></hr>
      <div class="version" id="version-ruangadmin"></div>
    </ul>



 



   
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">

        
     
              <nav class="navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top">
             <button id="sidebarToggleTop" class="btn btn-link rounded-circle mr-3">
               <i class="fa fa-bars"></i>
             </button>

             <ul class="navbar-nav ml-auto">
   
               <li class="nav-item dropdown no-arrow">
                 <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false">
                   <img class="img-profile rounded-circle" src={localStorage.getItem("avatar")} style={{ maxwidth: '60px'}}/>
                   <span class="ml-2 d-none d-lg-inline text-white small"><h4 ><button className="btn btn-primary" > { localStorage.getItem('username')} </button><button className="btn btn-primary ml-2" > { localStorage.getItem('email')} </button></h4></span>
                   
                 </a>
                 
               </li>
             </ul>
           </nav>
    


            <div className="card mx-auto mt-5" style={{width:'400px'}} >
            < div id="success" style={{display:'none', textAlign:'center'}}className="alert alert-success alert-dismissable fade-show m" role="alert">
        Profile Updated.
        <button type="button" class="close" data-dismiss="alert" aria-label="close"></button></div>
              <table className="table table-bordered">
            
                <tbody>
                    <tr>
                        <th>Full Name</th>
                        <td>
                            <input value={this.state.full_name} name="name" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>
                            <input value={this.state.email} name="email" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    
                    <tr>
                        <th>Password</th>
                        <td>
                            <input value={this.state.password} name="password" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <input type="submit" onClick={this.submitForm} className="btn btn-dark ml-5" />
                           <a href="/Dashboard" ><button type="button" className="btn btn-danger ml-3">Cancel</button></a>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>


            </div>
    

    </div>



</div>



</div>

            </>
        );
    }
}

export default Update;