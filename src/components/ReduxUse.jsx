import React from 'react'
import {incNumber,decNumber} from '../actions/Number'


import {useDispatch,useSelector} from 'react-redux'

const ReduxUse = () => {
  const dispatch = useDispatch();
  const changetheNumber = useSelector(state => state.changetheNumber);
  const store = useSelector(state => state);
  
  return (
    <div>
      <h1>-- Use of React-Redux || Redux --</h1>
      <br /><br />
      <button onClick={()=>dispatch(incNumber())} >Increment Number</button>
      {/* <input type="text" value={changetheNumber} /> */}
      {changetheNumber}
      {console.log(store)}
      <button onClick={()=>dispatch(decNumber())} >Decrement Number</button>
    </div>
  )
}

export default ReduxUse
