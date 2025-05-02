import { useState } from 'react';
import './Counter.css';

export default function Counter({initialValue}) {

    const [count , setCount] = useState(initialValue);
    const increment = ()=>{
        setCount(count+1);
    }
    const reset = ()=>{
        setCount(0);
    }
    const decrement = ()=>{
        
        if(count>0){
            setCount(count-1);
        }
        else{
            return;
        }
    }
  return (
    <div>
          <h1>Counter App</h1>
          <div  >
              <h2>Counter value: {count}</h2>

              <div className='btn-group' >
              <button className='btn' onClick={increment} >Increment</button> 
              <button className='btn' onClick={reset} >Reset</button> 
              <button className='btn' onClick={decrement} >Decrement</button>
              </div>
          </div>
    </div>
  )
}
