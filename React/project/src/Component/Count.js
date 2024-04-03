
import React, {useState} from 'react';

function Count () {

    const[count, setCount] = useState(0)

     const myFun1 = () => {
           console.log("click");
           setCount(count + 1)
     }
     const myFun2 = () => {
      console.log("click");
      setCount(count - 1)
    }

    return(
         <div className=" flex justify-center items-center">
        
         <button onClick={myFun1}className=' font-bold text-8xl px-5 '>+</button>
         
        <h1 className='text-5xl'>{count}</h1>
        <button onClick={myFun2} className=' font-bold text-8xl px-5'>-</button>
        </div>
    );
}
  

export default Count
