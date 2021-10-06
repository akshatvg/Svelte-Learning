// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import {count} from './stores.js'

function App() {
    const add = () => {

        // console.log('add', count, count.update(n => {
        //     console.log(n);
        //     return n + 1;
        // }));
        count.increment();
    }
    console.log(count);
window.newcount = count;
  
    //   const [count, setCount] = useState(5);
//   useEffect(() => {
//       console.log(count)
//       if(count > 15)
//       {
//           setCount(0)
//       }
//   }, [count])

// btn->svelte->updates the state
// react listens to the state -> if count > 10, react alert 
// react never modifies the state, it only either passes in a prop 
// react listens to the state update, subscribes

// let {x} = JSON.parse(customFunction)


    return (
        <div className="App">
            <div onClick={()=>add()}>btn</div>
            <bundle-file customFuntion={JSON.stringify({x: ()=>console.log("hello")}, function(key, value) {
  if (typeof value === 'function') {
    return value.toString();
  } else {
    return value;
  }
})}></bundle-file>
            {/* <bundle-file-add></bundle-file-add> 
            <bundle-file-dec></bundle-file-dec>
            <bundle-file-stores></bundle-file-stores> */}
            {/* <bundle-file count={count} clickFunction={()=>setCount(count + 1)}></bundle-file> */}
            {/* <bundle-file count={JSON.stringify(()=>window.alert('asd'))}></bundle-file> */}
        </div>
    );
}

export default App;
