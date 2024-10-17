import './App.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset,changeRange } from './redux/counterSlice'
import { useState } from 'react'


function App() {
  const [range,setRange] =useState(0)
  const count = useSelector((state)=>(state.counter.value))
  console.log(count);
  console.log(range);
  
  const dispatch = useDispatch() /* to call the action */
  
  return (
    <>
      <div style={{height:'100vh',backgroundColor:"black"}} className='d-flex justify-content-center align-items-center'>
        <div style={{width:"500px"}} className='rounded p-5 bg-light'>
          <h1 className='text-center'>Counter Application</h1>
          <div style={{fontSize:'70px'}} className='text-center p-5'>{count}</div>
          <div className='d-flex'>
            <button onClick={()=>dispatch(decrement())} className='btn btn-warning w-100 mx-2 p-3'>Decrement</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger w-100 mx-2 p-3'>Rest</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-success w-100 mx-2 p-3'>Increment</button>
          </div>
          <div className='d-flex mt-5'>
            <input type="text" className='form-control' onChange={(e)=>{setRange(e.target.value)}} placeholder='Enter the Range'/>
            <button className='btn btn-primary ms-3 p-3' onClick={()=>dispatch(changeRange(Number(range)))}>click</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
