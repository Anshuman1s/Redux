import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {increment,decrement,incrementByAmount, incrementAsync} from './Store/Reducers/CounterSlice'

function App() {
  const {value} = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className='m-auto container mt-5 bg-yellow-300 p-10 '>
      <h1 className='text-center font-medium text-3xl text-blue-500 mb-5'>Counter:{value}</h1>
      <div className="text-center ">
        <button onClick={()=>dispatch(increment())} className="border rounded-full px-3 py-3 bg-blue-400 ">Increment</button>
        <button onClick={()=>dispatch(decrement())} className="border rounded-full px-3 py-3 bg-blue-400">decrement</button>
        {/* <button onClick={()=>dispatch(incrementByAmount(5))} className="border rounded-full px-3 py-3 bg-blue-400">Increment by 5</button> */}
        <button onClick={()=>dispatch(incrementAsync(5))} className="border rounded-full px-3 py-3 bg-blue-400">Increment by 5</button>
      </div>
    </div>
  )
}

export default App