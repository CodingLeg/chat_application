import React from 'react';
class CreateGroup extends React.Component{
    constructor(){
        super();
        this.myRef = React.createRef();
        this.myRef1 = React.createRef();
        this.myRef2 = React.createRef();
        this.myRef3 = React.createRef();
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

        fetch('http://127.0.0.1:8000/group/',{
            method:'POST',
            body:JSON.stringify({
            "groupName":this.myRef1.current.value,
            "admin":this.myRef2.current.value,
            "subscribe":this.myRef3.current.value
        }),
        })
      
        .then(response=>response.json())
        .then((data)=>console.log(data));
        localStorage.setItem("password",this.myRef3.current.value)
window.location.replace("/UserDashboard")
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
                            <input  style={{width:"200px"}} defaultValue={this.state.username} name="name" ref={this.myRef}  type="text" className="form-control" readOnly />
                        </td>
                    </tr>
                    <tr>
                        <th>Group Name</th>
                        <td>
                            <input defaultValue={this.state.first_name} name="password" ref={this.myRef1} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Admin</th>
                        <td>
                            <input value="ADMIN_R" name="password" ref={this.myRef2} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Subscribe</th>
                        <td>
                            <input name="password" ref={this.myRef3} type="text" className="form-control" placeholder="Enter Old Or New Password"/>
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

export default CreateGroup;