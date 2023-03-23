import React from 'react'
// import Temp_estorant from './component.js/basic/Temp_restorant'
import './component.js/basic/style.css'; //we can add css file current module or parents module
import Restorant from './component.js/basic/Restorant';
// import Module from './component.js/basic/module'

 {/* always write module in react in first letter is should be uppercase */}
const App = () => {
  return (
    <>
     <Restorant/>
    {/* <Temp_estorant/> */}
      {/* <Module/>
      <Mpname/>    */}
             
      
    </>
  );
};

// const Mpname=()=>
// {
//   return <h1>i am vicky</h1>
// }

export default App
