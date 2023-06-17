import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  // Understand useSelector from https://react-redux.js.org/api/hooks#useselector
  // It says "Allows you to extract data from the Redux store state
  // for use in this component, using a selector function."
  const count = useSelector((state) => state.counter.value)
  //Understand useDispatch from https://react-redux.js.org/api/hooks#usedispatch
  // It says "This hook returns a reference to the dispatch function
  // from the Redux store. You may use it to dispatch actions as needed."
  // You can then call dispatch(actionName)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
export default Counter
