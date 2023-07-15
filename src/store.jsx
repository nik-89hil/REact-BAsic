// import {createStore} from 'redux';
// import RootReducer from './reducers/index'

// const store = createStore(RootReducer);


// export default store





// for redux toolkit

import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './reduxToolkit/CounterSlice'

export default configureStore({
    reducer:{
        counter:counterReducer
    }
})