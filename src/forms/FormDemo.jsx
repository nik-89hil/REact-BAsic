import React, { useState } from 'react'


// use of useState for forms ----


const FormDemo = () => {
    const[name,setName] = useState("");
    const submitForm=(e) =>{
        e.preventDefault();
        alert(`Your name is : ${name}`)
    }
  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Enter Your Name:</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="submit" value="send" />
      </form>
    </div>
  )
}

export default FormDemo
