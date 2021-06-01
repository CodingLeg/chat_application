import React from 'react'
import './adminstyle.css'
class AdminDashboard extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        };
    }

   
    registerfn(){

      fetch('http://127.0.0.1:8000/user/',{
          method:'GET',
          
          
      })
    
      .then(response=>response.json())
      .then((data)=>{
          this.setState({
              data:data
          });
      });
}


componentDidMount() { 
    
  
    
    this.interval = setInterval(() => this.registerfn(), 1000); } 

componentWillUnmount() { clearInterval(this.interval); }



    componentDidMounts(){
        if(localStorage.getItem("admin")!="admin"){
            window.location.replace("/AdminForm");
       }
        this.registerfn();
    }

    handleClick({currentTarget}) {    
        //console.log(currentTarget.value) 
        localStorage.setItem( 'userid',currentTarget.value)
        window.location.replace("/AdminUpdateForm");
         
        // e.currentTarget.value would be equivalent
      }
      logout(){

        localStorage.clear();
        window.location.replace("/AdminForm");
    }
  
 
    print(){
        window.print();
    }

    delete({currentTarget}) {    
        
        fetch('http://127.0.0.1:8000/user/'+currentTarget.value + '/',{
            method:'DELETE',
              
            
        })

        console.log(currentTarget.value);
       
       // window.location.reload();
      //  window.location.replace("/Dasshboard");
      }

    render() {
   
      
         
        const groupData=this.state.data;
        //   var  ist=1;
           const rows=groupData.map((gp)=>


                                      <tr>
                                            <td>{gp.id}</td>
                                            <td class="txt-oflo">{gp.username}</td>
                                           <td class="txt-oflo">{gp.full_name}</td>
                                           <td class="txt-oflo">{gp.email}</td>
                                           <td > 
                                           <button  type="button" class="btn btn-warning" value={gp.id} onClick={this.handleClick}>                                              Edit
                                          </button> </td>

                                          <td > 
                                           <button  type="button" class="btn btn-danger" value={gp.id} onClick={this.delete}>                                              Delete
                                          </button> </td>
                                          

                                        </tr>
           );

        return (
          
        
        <div>
            <div className="body">
                <div class="preloader">
                    <div class="lds-ripple">
                        <div class="lds-pos"></div>
                        <div class="lds-pos"></div>
                    </div>
                </div>
                <nav class="navbar navbar-dark bg-primary" style={{minHeight:"2px"}}>
        
                <button  type="button" class="btn btn-danger"  onClick={this.print}>                                             Print
        </button>

                <div class="container-fluid">
    <a class="navbar-brand"  href="Dashboard" style={{paddingTop:"8px"}}>Dashboard</a>
    <a class="navbar-brand" onClick={this.logout} >Logout</a>
    


  </div>
  </nav>

                <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
                    data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">

                    <header class="topbar" data-navbarbg="skin5">
                       
                    </header>
                 </div>
               
       <div class="page-wrapper">

            <div class="page-breadcrumb bg-white">
                <div class="row align-items-center">
                     <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                          
                     </div>
      
                </div>
 
            </div>
        </div>

<div class="container-fluid">

    <div class="row justify-content-center">
        <div class="col-lg-4 col-md-12">
            <div class="white-box analytics-info">
                
                <ul class="list-inline two-part d-flex align-items-center mb-0">
                    <li>
                        <div id="sparklinedash"><canvas width="67" height="30"
                            
                             style={{display: "inline-block", width: "67px", height: "30px", verticalAlign: "top"}}></canvas>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
        <div class="col-lg-4 col-md-12">
            <div class="white-box analytics-info">
              
                <ul class="list-inline two-part d-flex align-items-center mb-0">
                    <li>
                        <div id="sparklinedash2"><canvas width="67" height="30"
                                style={{display: "inline-block", width: "67px", height: "30px", verticalAlign: "top"}}></canvas>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
      
    </div>
        </div>
            
        <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12">
                        <div class="white-box">
                        
                                <h3 style={{display:"flex" , justifyContent:"center" ,alignItems:"center"}}> REAL CODERZ PHILOMATS </h3>
                            <br></br>
                           
                            <div class="table-responsive">
                                <table class="table table-hover table-striped mx-auto"style ={{width:"800px"}}>
                                   
                                    <thead class="thead-dark">
                                        
                                        <tr>
                                            <th class="border-top-0">Id</th>
                                            <th class="border-top-0">User</th>
                                            <th class="border-top-0">Full Name</th>
                                            <th class="border-top-0">Email</th>
                                            <th class="border-top-0">Edit</th>
                                            <th class="border-top-0">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                     {rows}
                                       
                                    </tbody>
                                </table>
                            </div>
                           
                            

                        </div>
                    </div>
                </div>

             
                <script src="plugins/bower_components/jquery/dist/jquery.min.js"></script>


<script src="bootstrap/dist/js/bootstrap.bundle.min.js"></script>
<script src="js/app-style-switcher.js"></script>
<script src="plugins/bower_components/jquery-sparkline/jquery.sparkline.min.js"></script>

<script src="js/waves.js"></script>

<script src="js/sidebarmenu.js"></script>

<script src="js/custom.js"></script>

<script src="plugins/bower_components/chartist/dist/chartist.min.js"></script>
<script src="plugins/bower_components/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.min.js"></script>
<script src="js/pages/dashboards/dashboard1.js"></script>


            </div>
            </div>

    

           );
    }
}

    export default AdminDashboard ;