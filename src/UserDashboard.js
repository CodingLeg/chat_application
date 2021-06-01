import React from 'react';
import "./vendor/fontawesome-free/css/all.min.css";
// import "./vendor/bootstrap/css/bootstrap.min.css";
import "./css/ruang-admin.css";
import "./css/new.css";
import "./styleev.css";


class UserDashboard extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        };
    }

    registerfn(){
      
        fetch('http://localhost:8000/member/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
            console.log(data)
            console.log(localStorage.getItem("username"))
          
            
        });

       
  }


  
delete(e){
    fetch('http://127.0.0.1:8000/member/'+e.currentTarget.value+"/",{
      method:'DELETE',
      headers:{
          'Content-type': 'application/json; charset=UTF-8',
      },
  })
  .then(response=>response.json())
  .then((data)=>console.log(data))
  .catch(error=>console.log(error))
  window.location.reload();
   
  }

  componentDidMount(){
    this.registerfn();
}

logout(){

  localStorage.clear();
  window.location.replace("/LoginForm");
}


  
   render(){


    const rows=this.state.data.map((grp)=>{
         
        if(grp.user_ID==localStorage.getItem("id")){
          if(grp.role=="user"){
        return (  <div className="card mx-auto mt-3" style={{width:'18rem'}} >
          <div className="card-body">
            <div className="d-flex">
    <h5 className="card-title">{grp.gpName}</h5>
  
    <p className="ml-auto">{grp.role}</p>

    </div>

    <a href={"Chat/"+grp.gpName+"/"+grp.grp_ID+"/"+localStorage.getItem("username")} className="btn btn-primary">Chat Now</a>
    <button type="button" value={grp.id} onClick={this.delete} className="btn btn-danger ml-3">Unsubscribe</button>
 
 </div>
  </div>

        )}
        else{
          
          return (  <div className="card mx-auto mt-3" style={{width:'18rem'}} >
          <div className="card-body">
            <div className="d-flex">
    <h5 className="card-title">{grp.gpName}</h5>
  
    <a href={"/Manage/"+grp.grp_ID+"/"+grp.gpName}><button className="btn btn-success btn-sm pt-0 pb-1 ml-1" style={{height:'20px',fontSize:'12px'}}>Manage</button></a>
    <p className="ml-auto">{grp.role}</p>

    </div>

    <a href={"Chat/"+grp.gpName+"/"+grp.grp_ID+"/"+localStorage.getItem("username")} className="btn btn-primary">Chat Now</a>
    <button type="button" value={grp.id} onClick={this.delete} className="btn btn-danger ml-3">Unsubscribe</button>
 
 </div>
  </div>

        )
        }
       } });
        
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
     
           <header id="header-wrap">
         
         <div id="main-slide" class="carousel slide" data-ride="carousel">
             <ol class="carousel-indicators">
               <li data-target="#main-slide" data-slide-to="0" class="active"></li>
               <li data-target="#main-slide" data-slide-to="1"></li>
               <li data-target="#main-slide" data-slide-to="2"></li>
             </ol>
             <div class="carousel-inner">
               <div class="carousel-item active">
                 <img class="d-block w-100" src="imge/slide1.jpg"  alt="First slide" style={{height:'auto', width:'20%'}} />
                 <div class="carousel-caption d-md-block">
                 <div class="carousel" data-interval="10000">
                   <p class="fadeInUp wow" data-wow-delay=".6s">Learn A New Technology </p>
                   <h1 class="wow fadeInDown heading" data-wow-delay=".4s">The Biggest Event is Coming</h1>
                   <a href="#" class="fadeInRight wow btn btn-border btn-lg" data-wow-delay=".6s">Check next slides for more events</a>
                 </div>
                 </div>
               </div>
               <div class="carousel-item">
                 <img class="d-block w-100" src="imge/slide2.jpg" alt="Second slide"  style={{height:'auto', width:'20%'}}/>
                 <div class="carousel-caption d-md-block">
                 <div class="carousel" data-interval="10000">
                   <p class="fadeInUp wow" data-wow-delay=".6s">Study Group on Latest Technologiies</p>
                   <h1 class="wow bounceIn heading" data-wow-delay=".7s"> React</h1>
                   <a href="#" class="fadeInUp wow btn btn-border btn-lg" data-wow-delay=".8s">Learn More</a>
                 </div>
                 </div>
               </div>
               <div class="carousel-item">
                 <img class="d-block w-100" src="https://theschooltrip.co.uk/wp-content/uploads/2020/10/Bletchley-Park-Virtual-Learning-Sessions-Main-Post-Image.jpg" alt="Third slide"  style={{height:'auto', width:'20%'}}/>
                 <div class="carousel-caption d-md-block">
                 <div class="carousel" data-interval="10000">
                   <p class="fadeInUp wow" data-wow-delay=".6s"> Study Group on React</p>
                   <h1 class="wow fadeInUp heading" data-wow-delay=".6s">Subscribe Now!</h1>
                   <a href="/AllGroup" class="fadeInUp wow btn btn-common btn-lg" data-wow-delay=".8s">Explore</a>
                 </div>
                 </div>
               </div>
             </div>
             <a class="left carousel-control" href="#myCarousel" data-slide="prev">
         <span class="glyphicon glyphicon-chevron-left"></span>
         <span class="sr-only">Previous</span>
       </a>
       <a class="right carousel-control" href="#myCarousel" data-slide="next">
         <span class="glyphicon glyphicon-chevron-right"></span>
         <span class="sr-only">Next</span>
       </a>
           </div>
         </header>
     



  
 <div class="row mx-auto" style={{width:'70%'}}>
{rows}</div>
             
            </div>
    

            </div>


   
  </div>

  <script src="vendor/jquery/jquery.min.js"></script>
 
  
 
</div>



    
    );
  }
};
export default UserDashboard;