import React, { Component } from 'react'
import serviceU from './services/serviceU'

export default class TinyComp extends Component {
    constructor()
    {
      super();
      this.state = {
        searchId:2,
        theUser:{},
        toDos:[],
      }
      
    }    

    getAUser = async () =>{
        const newU = await serviceU.getUserFullData(this.state.searchId)
        console.log("get newU")
        await this.setState({theUser:newU})
        await this.setState({toDos:newU.todos})
        console.log(newU)
      }
    handleValue = (e)=>{
        this.setState({searchId:e.target.value})
    }

    
    render() {

        const printToDo = <div>
            {this.state.toDos.map((elem,i)=>
                <li key={i}>{elem.title}</li>
            )}
       </div>
 
        return (
            <div>
             
                <input type={"number"} onChange={this.handleValue}/>
                <button  onClick={this.getAUser}>Get 2</button><br/>
                Name:{this.state.theUser.name} <br/>
                Email:{this.state.theUser.email}<br/>
                <button>Tasks</button>
                {printToDo}
            </div>
        )
    }
}
