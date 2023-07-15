import React from 'react'


import {useDispatch,useSelector} from 'react-redux'
import {incNumber1,decNumber2} from '../reduxToolkit/CounterSlice'

const ReduxUse = () => {
  const dispatch = useDispatch();
  const changement = useSelector(state => state.counter.counter);
  const store = useSelector(state => state);
  
  return (
    <div>
      <h1>-- Use of React-Redux || Redux-toolkit --</h1>
      <br /><br />
      <button onClick={()=>dispatch(incNumber1())} >Increment Number</button>
      {/* {changement} */}
      {changement}
      {console.log(store,"-----",changement)}
      <button onClick={()=>dispatch(decNumber2())} >Decrement Number</button>
    </div>
  )
}

export default ReduxUse
