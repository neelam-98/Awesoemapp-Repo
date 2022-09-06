import React, { useState} from 'react'
import Child from './Child';
import { useRef } from 'react';


// const Parent = () => {
//    const [name, setName] = useState('User');
//    return (
//       <div>
//       {name} has email id of {name}@gmail.com
//         <div>
//             <Child name={name} change={setName} />
//         </div>
//       </div>
//    );
// };
// const Parent = () => {
//     const myRef = useRef();
//     return <Child ref={myRef} />;
// }
const Parent = () => {
    return (
        <>
        <h5>Hello</h5>
      <Child onSubmit={(arg) => { 
        console.log('accessing child state from parent callback: ', arg) }} 
      /> 
      </>
    )
  }


export default  Parent;

