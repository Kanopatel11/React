import React from 'react'
import { useState } from 'react'



    function Counter(props) {
        const [count,setCount]=useState(0)
    
        function Increment(){
            setCount(count+1)
        }
        function Decrement(){
            if(count == 0){
                setCount(0)
            }else
            {
                setCount(count - 1)
            }
        }
        function reset(){
            setCount(0)
        }




  return (
       
        <div>
        <img src={props.Back}></img>
        <h1>Image : {count}</h1>
        <button onClick={Increment} className='a1'>Increment</button>
        <button onClick={Decrement} className='a2'>Decrement</button>
        <button onClick={reset} className='a3'>reset</button>
    </div>
       
       
  )
}

export default Counter
