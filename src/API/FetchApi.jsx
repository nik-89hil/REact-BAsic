import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const [data,setData] = useState(null);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[])
  return (
    <div>
      <h1>|| Using Fetch Api :: </h1>
      <br /><br /><br />

      {data &&
        data.map((item,id)=>{
            return (
                <li key={id}>{item.it} {item.title} <br /> {">"} {item.body}</li>
                
            )
        })
      }

    </div>
  )
}

export default FetchApi
