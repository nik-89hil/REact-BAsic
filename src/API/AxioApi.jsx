import React, { useEffect, useState } from 'react'
import axios from 'axios'

//get and post data using axios ----------

const AxioApi = () => {
    const [data,setData] = useState(null);
    const baseURL = "https://jsonplaceholder.typicode.com/todos";
    const baseURL2 = "https://jsonplaceholder.typicode.com/posts";
    const style ={
        border:"2px solid black",
        padding:"10px"
    }
    useEffect(()=>{
        axios.get(baseURL2)
        .then((response)=>setData(response.data))
    })

    //---------POST----------------
    

    const postdata = () =>{
        axios.post(baseURL2,{
            title:"Hi by",
            completed:true
        }).then((response)=>setData(console.log(response.data)))
    }





  return (
    <div>
        <h1>Using Axios :</h1>
        <br /><br />
        <table style={style}>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Completed</th>
            </tr>
            {
        data &&
        data.map((item,id)=>{
            return(
                <tr  key={id}>
                    <td>{item.id} :</td>
                    <td>{item.title}</td>
                    <td>{item.completed?"Completed":"Not Completed"}</td>
                </tr>
            )
        })
      }
        </table>

        <button onClick={postdata}>Post Data</button>
      
    </div>
  )
}

export default AxioApi
