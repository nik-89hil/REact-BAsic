import React from 'react'

const Demo = () => {           ///     props passed in as parameter
    const [name,setName] = React.useState('null');
    const [age,setAge] = React.useState(0);
    const [married,setMarried] = React.useState(false);
    const [curr,setCurr] = React.useState("Initial")

    const updateValue = () =>{
        setName("Nikhil");
        setAge(20);
        setMarried(true);
        setCurr("Now")
    }
  return (
    <div>
      <h1>This is function components example</h1>
      <br /><br />
      <h2>using useState :</h2>
      <p>{curr} value of name is {name}</p>
      <p>{curr} value of age is {age}</p>
      <p>{curr} value of Married is {`${married}`}</p>
      <button onClick={updateValue}> update Date </button>
    </div>
  )
}

export default Demo
