import React, { Component } from 'react';
import serviceU from './services/serviceU'


export default class User extends Component {
    constructor()
    {
      super();
      this.state = {
        theUser:{},
        name:"",
        email:"",
        toDos:"",
        posts:"",
      }
      
    }  
    getAUser = async () =>{
        const newU = await serviceU.getUserFullData(this.props.idUser )
        console.log("get newU")
        await this.setState({theUser:newU})
        await this.setState({name:newU.name})
        await this.setState({name:newU.email})
        await this.setState({toDos:newU.todos})
        await this.setState({posts:newU.posts})
        console.log(newU)
      }

  render() {
    const dataUser = this.getAUser()


    return <div style={{backgroundColor:"grey"}}> Id : {this.props.idUser} <br/>
    Name:{this.state.name} <br/>
    Email:{this.state.email}  <br/>  
   
     </div>;
  }
}
