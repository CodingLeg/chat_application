import React, { Component } from 'react'
import './bootstrap.css';
import './chat.css';
export default class Chat extends Component {

    constructor(){
        super();
        
        this.myRef = React.createRef();
        this.sendmsg = this.sendmsg.bind(this);        
        this.state={
            data:[],
            group:[],
         
        };
    }

    fetchGroup(){
      fetch('http://localhost:8000/member/')
      .then(response=>response.json())
      .then((data)=>{
          this.setState({
              group:data
          });
          console.log(this.state.group)          
      });
  
  }

   fetchData(){
        fetch('http://127.0.0.1:8000/message')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
            console.log(data)
            console.log(localStorage.getItem("username"))
            
        });

    }
    

   async sendmsg(){
     //console.log(this.props.match.params.user)
     //console.log(this.props.match.params.value)
     //console.log(this.props.match.params.group)
     //var a=this.props.match.params.group.split("'")
     //console.log(a)
   //  console.log(this.props.match.params.group.split("'"))
      await fetch('http://127.0.0.1:8000/message/',{
          method:'POST',
          body:JSON.stringify({"user":this.props.match.params.user,"messages":this.myRef.current.value,
          "group":this.props.match.params.group,
          "grp_ID":this.props.match.params.id,
           
        }),
          headers:{
              'Content-type': 'application/json; charset=UTF-8',
          },
      })
      .then(response=>response.json())
      .then((data)=>console.log(data))
      this.fetchData()
  }


async componentDidMount(){
  if(localStorage.getItem("username")==null){
    this.props.history.push('/Login')
  }
  this.fetchGroup();
  this.fetchData();
  this.interval = setInterval(() => 
  this.fetchData(), 
  5000);
}


componentWillUnmount() {
  clearInterval(this.interval);
}

  
deleteMsg(e){
  fetch('http://127.0.0.1:8000/message/'+e.currentTarget.value+"/",{
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



    render() {
   

      const groups=this.state.group.map((grp)=>{
        if(grp.user_ID===localStorage.getItem("id")){
           this.a=grp.id
          console.log("GROUP IS"+this.a );
        return(
          <a href={"/Chat/"+grp.gpName+"/"+ grp.grp_ID+"/"+localStorage.getItem("username")} className="list-group-item list-group-item-action list-group-item-light rounded-0">
          <div className="media"><img src="https://www.italianfamilyfood.com/wp-content/plugins/profilegrid-user-profiles-groups-and-communities/public/partials/images/default-group.png" alt="user" width="50" className="rounded-circle"/>
            <div className="media-body ml-4">
              <div className="d-flex align-items-center justify-content-between mb-1">
                <h6 className="mb-0">{grp.gpName}</h6>
              </div>
              </div>
          </div>
        </a>
        )}
      });

        const rows=this.state.data.map((msg)=>
        { 
          if(msg.group===this.props.match.params.group){
       // eslint-disable-next-line
        if(msg.user==this.props.match.params.user){

            return(
                  <div key={msg.id} className="media w-50 ml-auto mb-3">
                  <div className="media-body">
                    <div className="bg-primary rounded py-2 px-3 mb-2">
                      <p className="text-small mb-0 text-white">{msg.messages}<button style={{color:'white'}} className="btn btn-default btn-sm mr-auto"value={msg.id} onClick={this.deleteMsg} >
                    <i class="fas fa-trash"></i> </button></p>
                    </div>
                    <p className="small text-muted">You</p>
                   
                    
                    
                    
                  </div>
                </div>
                  )
        }
        else{ return(
           
          <div key={msg.id} className="media w-50 mb-3"><img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="user" width="50" className="rounded-circle"/>
          <div className="media-body ml-3">
            <div className="bg-light rounded py-2 px-3 mb-2">
              <p className="text-small mb-0 text-muted">{msg.messages}</p>
            </div>
            <p className="small text-muted">{msg.user}</p>
          </div>
        </div>
          )
        }}}
                  );
                                 
        return (

            <div className="container py-5 px-4">

            <div className="row rounded-lg overflow-hidden shadow">
          
              <div className="col-5 px-0" >
                <div className="bg-white" >
          
                  <div className="bg-gray px-4 py-2 bg-light">
                    <p className="h5 mb-0 py-1">Groups</p>
                  </div>
          
                  <div className="messages-box">
                    <div className="list-group rounded-0">
                      
          {groups}
                      
          
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-7 px-0">
          
              <div className="bg-gray px-4 py-2 bg-light" style={{display:'flex', height:'48px'}}>
                    <p className="h5 mb-0 py-1">Messages</p>
                    <p className="ml-auto h-6 py-1">User: {localStorage.getItem("username")}</p>
                  </div>
                <div className="px-4 py-5 chat-box bg-white overfow-auto">
                  
                 {rows}

                </div>
          
                <form  className="bg-light">
                  <div className=" input-group" style={{  display: 'flex',backgroundColor: 'white'}} >
                    <input ref={this.myRef} type="text" placeholder="Type a message" aria-describedby="button-addon2" className="form-control rounded-0 border-0 py-4 bg-light"/>
                    <div className="input-group-append">
                      <button id="button-addon2" onClick={this.sendmsg} type="button" className="btn"> <i style={{color:'blue'}}className="fa fa-paper-plane"></i></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
    
        )
    }
}
