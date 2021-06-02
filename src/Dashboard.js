import React, { Component } from 'react'

export default class Dashboard extends Component {

  constructor(){
    super();      
    this.state={
        data:[]
    };
}




  fetchData(){
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

delete(e){
  fetch('http://127.0.0.1:8000/group/'+e.currentTarget.value+"/",{
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

async componentDidMount(){
 
  this.fetchData();
 
}

    render() {
      const rows=this.state.data.map((grp)=>{

        if(grp.subscribe===localStorage.getItem("username")){
          if(grp.role==="user"){
        return (  <div className="card mx-auto mt-3" style={{width:'18rem'}} >
          <div className="card-body">
            <div className="d-flex">
    <h5 className="card-title">{grp.gpName}</h5>
  
    <p className="ml-auto">{grp.role}</p>

    </div>

    <a href={"Chat/"+grp.gpName+"/"+localStorage.getItem("username")} className="btn btn-primary">Chat Now</a>
    <button type="button" value={grp.id} onClick={this.delete} className="btn btn-danger ml-3">Unsubscribe</button>
 
 </div>
  </div>

        )}
        else{
          
          return (  <div className="card mx-auto mt-3" style={{width:'18rem'}} >
          <div className="card-body">
            <div className="d-flex">
    <h5 className="card-title">{grp.gpName}</h5>
  
    <a href={"/Manage/"+grp.id}><button className="btn btn-success btn-sm pt-0 pb-1 ml-1" style={{height:'20px',fontSize:'12px'}}>Manage</button></a>
    <p className="ml-auto">{grp.role}</p>

    </div>

    <a href={"Chat/"+grp.gpName+"/"+localStorage.getItem("username")} className="btn btn-primary">Chat Now</a>
    <button type="button" value={grp.id} onClick={this.delete} className="btn btn-danger ml-3">Unsubscribe</button>
 
 </div>
  </div>

        )
        }
       } });
        return (
<>        
          <div class="row mx-auto" style={{width:'70%'}}>
{rows}</div>
          </>
        )
    }
}
