
import axios from 'axios'


const getTodos= (id)=>{
  return new Promise((resolve,reject)=>{ 
   
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
    .then((response)=>{
    


      resolve([response.data[0],response.data[1],response.data[2]])
    }
    )
    .catch((err)=>{
      reject(err)
    })

  })
}

const getPosts= (id)=>{
  return new Promise((resolve,reject)=>{ 
   
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then((response)=>{
    


      resolve(response.data[0])
    }
    )
    .catch((err)=>{
      reject(err)
    })

  })
}

const serviceU = {

  


getUserFullData:  async(id) =>{
  
    const todos = await getTodos(id)//await this.blal();
    const posts = await getPosts(id)
    

    return new Promise((resolve,reject)=>{ 
   
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response)=>{
     
      const per= {
        name:response.data.name,
        email:response.data.email,
        todos:todos,
        posts:posts,


    }
    console.log(response)
      resolve(per)
    }
    )
    .catch((err)=>{
      reject(err)
    })

  })

  }



}


export default serviceU;