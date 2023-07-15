import {createSlice} from '@reduxjs/toolkit'

const CounterSlice =createSlice(
    {
        name:"counter",
        initialState:{
            counter:2,
        },
        reducers:{
            incNumber1:(state)=>{
                state.counter +=1
    
            },
            decNumber2:(state)=>{
                state.counter -=1
            }
        }
    }
)

export const  {incNumber1,decNumber2} = CounterSlice.actions;

export default CounterSlice.reducer;