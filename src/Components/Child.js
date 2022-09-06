import React, { useState} from 'react'
import { useImperativeHandle } from 'react';

// const Child = ({ name, change }) => {
//     const [newName, setNewName] = useState(name);
//     return (
//        <div>
//        <input
//           placeholder="Enter new name"
//           value={newName}
//           onChange={(e) => setNewName(e.target.value)}
//        />
//        <button onClick={() => change(newName )}>Change</button>
//        </div>
//     );
//  };
// const Child = React.forwardRef((props, ref) => {
//     const [myState, setMyState] = useState('This is my state!');
//     useImperativeHandle(ref, () => ({getMyState: () => {return myState}}), [myState]);
// })
const Child = ({onSubmit}) => {
    const [text, setText] = useState('');

    return (
      <>
        <input value={text} onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => onSubmit("search")} />
      </>
    )
}
export default Child;
