import React, { Component } from 'react'

export default class AllGroup extends Component {
    constructor(){
        super();      
        this.state={
            data:[]
        };
    }
    
    subscribe(e){


      fetch('http://127.0.0.1:8000/member/',{
        method:'POST',
        body:JSON.stringify({"grp_ID":e.currentTarget.value.split("/")[1],"user_ID":localStorage.getItem("id"),"role":"user","gpName":e.currentTarget.value.split("/")[0]
    }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response=>response.json())
    .then((data)=>console.log(data))
    .catch(error=>console.log(error))
        
      window.location.replace('/UserDashboard')
        
    }
    
    
      fetchGroup(){
        fetch('http://localhost:8000/group/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
            console.log(data)
            console.log(localStorage.getItem("username"))
            
        });
    
    }
   
    
    componentDidMount(){
     
      this.fetchGroup();
     
    }
    
        render() {
       
        const rows=this.state.data.map((grp)=>{
         
    
            return (  <div className="card mx-auto mt-3" style={{width:'18rem'}} >
              <div className="card-body">
        <h5 className="card-title">{grp.gpName}</h5>
    
        <button type="button" value={grp.gpName +"/" +grp.id} onClick={this.subscribe} className="btn btn-primary ml-3">Subscribe</button>
      </div>
      </div>
    
            )
          });
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
                   <span class="ml-2 d-none d-lg-inline text-white small"><h4 ><button className="btn btn-primary" > { localStorage.getItem('username')} </button><button className="btn btn-primary ml-2" > { localStorage.getItem('email')} </button></h4></span>
                   
                 </a>
                 
               </li>
             </ul>
           </nav>
    

              <div class="row mx-auto" style={{width:'70%'}}>
    {rows}</div>
    </div>
    
    </div>

</div>  

</div>
              </>
            )
        }
}
