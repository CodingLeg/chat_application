import React from 'react';
import './Style.css';

class Register extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            contact:'',
            password:''
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    // Input Change Handler
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        }
        );
    }

    // Submit Form
    submitForm(){
        fetch('http://127.0.0.1:8000/student/',{
            method:'POST',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));
        
        this.email();
      //  this.props.history.push('/Login')

        this.setState({
            name:'',
            email:'',
            contact:'',
            password:''
        });
    }

email(){

    console.log("VAIBHAV")
}


    render(){
        return (
                <div>
                    <section>
                        <div class="container">
                            <div class="user singupBx">
                                <div class="imgBx"><img src="data:image/jpeg;base64,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" alt="description awesome" width="350" height="400" /></div>
                                    <div class="formBx">
                                        <form >
                                        {/*style="padding-top: 15px;*/}
                                            <h2 >Create an account</h2>
                                            <div >
                                            <input value={this.state.name} name="name" placeholder="Name" onChange={this.changeHandler} type="text" className="form-control" />
                                                
                                </div>
                                                <div>
                                                <input value={this.state.email} name="email" placeholder="Email" onChange={this.changeHandler} type="text" className="form-control" />
                                                    
                                </div>
    
                                                    <div >
                                                    <input value={this.state.contact} name="contact" placeholder="Contact" onChange={this.changeHandler} type="text" className="form-control" />
                                                           
                                </div>
    
                                                        <div >
                                                        <input value={this.state.password} name="password" placeholder="password" onChange={this.changeHandler} type="text" className="form-control" />
                                 </div>
    
                                 <input type="submit" onClick={this.submitForm}  className="btn btn-dark" />
                                                                <p className="signup">Already have an account? <a href="Login" >Sign in</a></p>
                            </form>
                                                        </div>
    
                                                    </div>
                                                </div>
                                                
                    </section>
            </div>
            
        );
    }
}

export default Register;