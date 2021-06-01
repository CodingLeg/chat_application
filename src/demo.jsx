import React from 'react';
//import "./Adminreport.css"
class demo extends React.Component{
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
       

    }
    print(){
      window.print();
  }

    handleClick({currentTarget}) {    
      //console.log(currentTarget.value) 
      localStorage.setItem( 'groupId',currentTarget.value)
      window.location.replace("/AdminUpdateForm");
      // e.currentTarget.value would be equivalent
    }

  
  componentDidMount(){
    console.log("fsdf")
    this.registerfn();
}

    registerfn(){

      fetch('http://127.0.0.1:8000/group/',{
          method:'GET',
            
      })
    
      .then(response=>response.json())
      .then((data)=>{
          this.setState({
              data:data
          });
      });
}


    render(){

      

      const groupData=this.state.data;
      //   var  ist=1;
         const rows=groupData.map((gp)=>


        

                                    <tr>
                                          <td>{gp.id}</td>
                                          <td >{gp.gpName}</td>
                                         <td >{gp.subscribe}</td>
                                         <td >{gp.created_at}</td>
                                         <td > 
                                         <button  type="button" class="btn btn-warning" value={gp.id} onClick={this.handleClick}>                                              View
                                        </button> </td>

                                      </tr>
         );


      return (
        <div>
        <style dangerouslySetInnerHTML={{__html: "\ntable {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n" }} />
        <h2>Group</h2>   <button styles= "text-align:center" type="button" class="btn btn-danger"  onClick={this.print}>                                             Print
        </button>
        
        <table>
          <br/>
          <tbody>
            <tr>
              <th>ID</th>
              <th>GROUP NAME</th>
              <th>ADMIN</th>
              <th>Created At</th>
              <th>MEMBER</th>
            </tr>

            {rows}
           
          </tbody></table>
      </div>
 
      );
      }
}
          
export default demo;