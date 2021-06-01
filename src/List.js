import React from 'react';
import "./vendor/fontawesome-free/css/all.min.css";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./css/ruang-admin.css";
import "./css/new.css";
//import "./css/style1.css";


//import "https://fonts.gstatic.com";

class List extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        };
    }

    registerfn(){

      fetch('https://api.chatengine.io/chats/',{
          method:'GET',
          headers: {'Project-ID': '91518671-2669-41fd-8c54-6358e73ede71', 'User-Name':localStorage.getItem('username'), 'User-Secret':localStorage.getItem('password')} 
          
      })
      .then(response=>response.json())
      .then((data)=>{
          this.setState({
              data:data
          });
      });
       
  }

  componentDidMount(){
    this.registerfn();
}

logout(){

  localStorage.clear();
  window.location.replace("/LoginForm");
}


  
   render(){


    const groupData=this.state.data;
    //   var  ist=1;
       const rows=groupData.map((gp)=>     
     //  <button onClick={() => window.location.replace('/chat')}>
     <a  class ="hrefs" href ="/chat">
     
            <div className="card" style={{height:"330px",width:"250px"}}>

            <div class="card-text">
             <h1 style={{fontSize:'30px'}}>{gp.title} </h1>
             <br></br>
        
            <i class="fas fa-users fa-2x text-info">  <span class="h" style={{fontSize:'18px',color:"yellow"}}> Participants :  </span> <span class="h" style={{fontSize:'20px' ,color:"yellow"}}> {gp.people.length }
            </span></i>
            <div>- </div>
            <div>
            
              </div>
              <span style={{fontSize:'18px'}}> Date: </span> <span class="h" style={{fontSize:'20px' ,color:"yellow"}}>  {gp.created.substring(0, 10)}
            </span>

               <div> -</div>

            <i class="fas fa-user-shield fa-1x ">  <span style={{fontSize:'15px' }}> Admin : </span> <span class="h" style={{fontSize:'20px' ,color:"yellow"}}>  {gp.admin.username}
            </span></i>
            
             </div>
         </div>
         </a>
       );

        
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
        <a class="nav-link" href="/chat">
          <i class="fas fa-fw fa-palette"></i>
          <span>Group</span>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="/UpdateForm">
          <i class="fas fa-fw fa-palette"></i>
          <span>Update Profile</span>
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
    
           <div class ="cst">

{rows.slice(0,3)}
</div>

<div class ="cst">
 {rows.slice(3,6)}
 </div>

 <div class ="cst">
 {rows.slice(6, rows.length)}
 </div>   
             
            </div>
    

            </div>


   
  </div>

  <script src="vendor/jquery/jquery.min.js"></script>
 
  
 
</div>



    
    );
  }
};
export default List;