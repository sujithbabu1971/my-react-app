import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
// Refer the return object of counterSlice to understand what is actions
// at https://redux-toolkit.js.org/api/createslice#return-value
// This you need not do createAction, that is by default done for
// each reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Refer the return object of counterSlice to understand what is reducer
// at https://redux-toolkit.js.org/api/createslice#return-value
// The documenation says "The generated reducer function is suitable for "
// " passing to the Redux combineReducers function as a "slice reducer"."
// Inside the generated main.chunk.js (or could be other generated js file)
// You will have something like the below for the reducer
// var store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
//  reducer: {
//    counter: _features_counter_counterSlice__WEBPACK_IMPORTED_MODULE_1__["default"]
//  }
// });
// This default export is used withing app/store.js as counterReducer

export default counterSlice.reducer
