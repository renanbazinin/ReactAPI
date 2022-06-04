import React, { Component } from 'react'
import axios from "axios"
import TinyComp from './TinyComp'
import User from './User';
export default class App extends Component {
  constructor()
  {
    super();
    this.state = {
      users:[],
      searchId:"",
      userById:{},
      toDos:"",

    }
    
  }

  handleValue = (e)=>{
    const {name,value}= e.target
    this.setState({[name]:value})
  }

  getAllUsers = async () =>{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
    this.setState({users:data})
  }
  getUserById = async () =>{
    
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.searchId}`)
    if(data.name.charAt(0) == 'E'){

      const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${this.state.searchId}`)
      console.log(res.data)
      this.setState({toDos:res.data})
    }
    else{this.setState({toDos:""})}
    this.setState({userById:data})
  }
  
  render() {

    //Reapter
    const allUser = this.state.users.map((user,i)=>{
      return <div key={i}> <User idUser={i} /> 
      <br/></div>
    })
    

    const getUserByIdR = <div>
      Name: {this.state.userById.name}<br/>
      Email: {this.state.userById.email}
    </div>
    const toDosForE = <ul>
        <li>{this.state.toDos.title}</li>
    </ul>

    return (
      <div>
        <h2>Shela 1</h2>
        Get user by id<input type={"number"} min={0} max={999} onChange={this.handleValue} name='searchId'></input><br/>
        <button onClick={this.getUserById}>Search</button>
        <br/>
        {getUserByIdR}
        <br/>
        {toDosForE}
        <br/><br/><br/>
        <h3>Shela 2</h3>
        <TinyComp/>
        <br/><br/><br/>
        <h3>Shela 3</h3>
        <button onClick={this.getAllUsers}>Get All users!</button>
        
        {allUser}
    
      </div>
    )
  }
}
