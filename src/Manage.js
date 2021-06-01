import React, { Component } from 'react'
import './test.css'
export default class Manage extends Component {
    constructor(){
        super();  
        this.myRef = React.createRef(); 
        this.myRef1 = React.createRef();
        this.add= this.add.bind(this);
        this.delete= this.delete.bind(this);
        this.deleteall= this.deleteall.bind(this);
 
        this.state={
            data:[],
            group:[],
            user:[]         
        };
    }


    fetchGroup(){
         fetch('http://localhost:8000/group/')
         .then(response=>response.json())
         .then((data)=>{
             this.setState({
                 group:data
             });
             console.log(data)
         });     
     }
     

    fetchData(){
       var id=this.props.match.params.id;
      
        fetch('http://localhost:8000/group/'+id)
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
            console.log(data)

        });
     }
    
   
    componentDidMount(){
 
        this.fetchData();
        this.fetchGroup();
        this.users();

      }


    deleteall(){
        var id=this.props.match.params.id;
    fetch('http://127.0.0.1:8000/group/'+id+"/",{
              method:'DELETE',
              headers:{
                  'Content-type': 'application/json; charset=UTF-8',
              },
          })
          .then(response=>response.json())
          .then((data)=>console.log(data))
          .catch(error=>console.log(error))


window.location.replace('/UserDashboard');
    }


      delete(){
            fetch('http://127.0.0.1:8000/group/'+this.myRef1.current.value+"/",{
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
users(){
    
    fetch('http://localhost:8000/user/')
    .then(response=>response.json())
    .then((data)=>{
        this.setState({
            user:data
        });
        console.log(data)

    });
}

      add(){        
        var id=this.props.match.params.id;
        var gname=this.props.match.params.gname;
        console.log("//////////////")
        console.log(this.props.match.params)
        console.log("//////////////")


        fetch('http://127.0.0.1:8000/member/',{
            method:'POST',
            body:JSON.stringify({"grp_ID":id,"user_ID":this.myRef.current.value,"role":"user",
            "gpName":gname}),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data))
        
      }

    render() {
        const dlt=this.state.group.map((grp)=>{
            if(grp.gpName==this.state.data.gpName){
                return(
                    <option value={grp.id}>{grp.subscribe}</option>
                )

            }
        })
        
        const add=this.state.user.map((grp)=>{
            
            return(
                <option value={grp.id}>{grp.full_name}</option>
            )

        
    })

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
                   <img class="img-profile rounded-circle" src={localStorage.getItem("avatar")} style={{ maxwidth: '60px'}}/>
                   <span class="ml-2 d-none d-lg-inline text-white small"><h4 ><button className="btn btn-primary" > { localStorage.getItem('username')} </button><button className="btn btn-primary ml-2" > { localStorage.getItem('email')} </button></h4></span>
                   
                 </a>
                 
               </li>
             </ul>
           </nav>
    



  
            <div className="card mx-auto mt-3" style={{width:'420px'}} >
            <div className="card-body">
              <div className="d-flex">
      <h5 className="card-title">{this.state.data.gpName}</h5>
    
      <button onClick={this.deleteall} className="btn btn-danger btn-sm pt-0 pb-1 ml-1" style={{height:'20px',fontSize:'12px'}}>Delete</button>
      <p className="ml-auto">Admin</p>
  
      </div>
      
      <div className="row d-flex">
      <select  class="form-control" ref={this.myRef} style={{width:"220px"}} >
        {add}
      </select>
      <button type="button" value="id" onClick={this.add} className="btn btn-primary ml-3">Add Member</button>
      </div>
      <div className="row d-flex mt-3">
      <select class="form-control" ref={this.myRef1}  style={{width:"220px"}}  placeholder="Full Name">
          {dlt}
      </select>
      <button type="button" value="id" onClick={this.delete} className="btn btn-danger ml-3">Remove Member</button>
      </div>
   </div>
    </div>
    </div>
    
    </div>

</div>  

</div>
    </>
        )
    }
}
