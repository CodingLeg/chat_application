import React, { Component } from 'react'
import $ from 'jquery'; 
export default class CreateGroup extends Component {

    constructor(){
        super();    

        this.myRef = React.createRef();
        this.createGroup = this.createGroup.bind(this);
        this.state={
            data:[],
            group:[]
        };
    }

  

    createGroup(){
       
        fetch('http://127.0.0.1:8000/group/',{
            method:'POST',
            body:JSON.stringify({"gpName":this.myRef.current.value,"subscribe":localStorage.getItem("username"),"role":"admin"}),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                group:data
            });

            fetch('http://127.0.0.1:8000/member/',{
                method:'POST',
                body:JSON.stringify({"grp_ID":this.state.group.id,"user_ID":localStorage.getItem("id"),"role":"admin","gpName":this.myRef.current.value
            }),
                headers:{
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
           
            .then(response=>response.json())
            .then((data)=>console.log(data))

         console.log(this.state.group.id)
         if(this.state.group.id!=null){
            document.getElementById('success').style.display='block';
            setTimeout(function() {
                $('#success').fadeOut('fast'); 
                window.location.replace('/UserDashboard');
            }, 1000);
            
            
         }
         else{
            document.getElementById('fail').style.display='block';
            setTimeout(function() {
                $('#fail').fadeOut('fast'); 
            }, 1000);
         }
        })

        
       
        
        


       /**dasda
        * 
        *  .then(function(response) {

            if(response.ok) {
                alert("Group  created")
                
             



              //  window.location.replace("/UserDashboard");
              return response.blob();
          }
          throw new Error('Network response was not ok.');
         })
         .catch(function(error) {
          console.log('Group is already created', 
          error.message);
          alert("Group is already created")
         });
        
    }
     */

    }

    render() {
        return (



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
         

            
        <input className ="btn btn-danger"  type="button"  value="Log Out" onClick={this.logout} />
        
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
    





            <div className="card mx-auto mt-5" style={{width:'18rem'}} >
          <div className="card-body">
    <h5 className="card-title">Create Your Group</h5>
    <div id="fail"style={{display:'none'}}className="alert alert-danger alert-dismissable fade-show" role="alert">
        Group already present.
        <button type="button" class="close" data-dismiss="alert" aria-label="close"></button></div>
       < div id="success"style={{display:'none'}}className="alert alert-success alert-dismissable fade-show" role="alert">
        Group Created.
        <button type="button" class="close" data-dismiss="alert" aria-label="close"></button></div>
        
    <form>
 
  <div class="form-group">
    <label for="exampleInputPassword1">Enter Group Name</label>
    <input ref={this.myRef} type="text" class="form-control" id="exampleInputPassword1" placeholder="Group Name"/>
    <small id="emailHelp" class="form-text text-muted">Enter new group name to create a new group.</small>
  </div>
  <div class="form-group form-check">
  </div>
  <button type="button" onClick={this.createGroup} class="btn btn-primary">Submit</button>
</form>
  </div>
  </div>


  </div>
    

    </div>



</div>




</div>

        )
    }
}
