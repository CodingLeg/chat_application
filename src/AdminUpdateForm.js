import React from 'react';
class AdminUpdateForm extends React.Component{
    constructor(){
        super();
        this.myRef = React.createRef();
        this.myRef1 = React.createRef();
        this.myRef2 = React.createRef();
        this.myRef3 = React.createRef();
        this.myRef4 = React.createRef();
        this.state={
            data:[]
        };

        

        this.submitForm=this.submitForm.bind(this);

    }


    onChangefn(){
        this.setState({
            username:this.myRef.current.value,
           
        });
    }

    submitForm(){
        console.log(this.myRef.current.value)
        console.log(this.myRef1.current.value)
        console.log(this.myRef2.current.value)
        console.log(this.myRef3.current.value)
      

     fetch('http://127.0.0.1:8000/user/'+localStorage.getItem("userid")+'/',{
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body:JSON.stringify({
                
            "username": this.myRef.current.value,
            "full_name":this.myRef1.current.value,
            "email":this.myRef2.current.value,
            "password":this.myRef3.current.value,
        }),
        })
      
       .then(response=>response.json())
        .then((data)=>console.log(data));
       window.location.replace("/AdminDashboard")
    }


    fetchData(){
         console.log(localStorage.getItem("userid"))
        fetch('http://127.0.0.1:8000/user/'+localStorage.getItem("userid")+'/',{
           
        })
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
    }

    render(){
        return (
            <div>
            
            <div class="card mx-auto"  style={{width: "450px" , height:"400px" , marginTop:"10%"}}>
  
  <div class="card-body">
    <h5  class="card-title" style={{marginLeft:"70px"}}  >Update Form</h5>
    <p class="card-text">
    <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th >Name</th>
                        <td>
                            <input  style={{width:"200px"}} defaultValue={this.state.username} name="name" ref={this.myRef}  type="text" className="form-control" r />
                        </td>
                    </tr>
                    <tr>
                        <th>First Name</th>
                        <td>
                            <input defaultValue={this.state.full_name} name="password" ref={this.myRef1} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>
                            <input defaultValue={this.state.email} name="password" ref={this.myRef2} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Password</th>
                        <td>
                            <input  defaultValue={this.state.password} name="password" ref={this.myRef3} type="text" className="form-control" placeholder="Enter Old Or New Password"/>
                        </td>
                    </tr>
                    
                    <tr>
                        <td colSpan="2">
                            <button type="button" onClick={this.submitForm} className="btn btn-dark" >Submit</button>
                            <a href="/UserDashboard"><button type="button"  className="btn btn-danger ml-3" >Cancel</button></a>
                        </td>
                    </tr>
                </tbody>
            </table>
    </p>
  </div>
</div>
            </div>
        );
    }
}

export default AdminUpdateForm;