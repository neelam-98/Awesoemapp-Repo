// import React from "react";
import React, {useState} from "react";
import { useEffect } from "react";

function Counter() {
    const state =useState();
    const [count, setCount] = useState("")
    useEffect(() => {
        alert('Welcome to the Page');
      },[]);
    const incNum = () => { 
        setCount(Number(count) + 1);
    }
    const decNum = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }
    return (
        <>
            {/* <h1>{count}</h1> */}
            <input type='number' value={count} 
                onChange={(e) => setCount(e.target.value)}/>
            <button onClick={incNum}>Increment</button>
            <button onClick={decNum}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    );
}
export default Counter;
