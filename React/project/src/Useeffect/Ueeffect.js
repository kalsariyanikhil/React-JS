import React,{useEffect,useState} from 'react'


function Ueeffect() {
    const[increment, setIncrement]=useState(0);
    const[decrement, setDecrement]=useState(0);

    // useEffect(()=>{
    //     console.log("useEffect run every render");
    // })

    // useEffect(()=>{
    //     console.log("useEffect run onr time when page is refresh or load timer");
    // },[]);

    useEffect(()=>{
            console.log("useEffect run depend on dependancy");
        },[decrement]);

        const incrementFun = () =>{
            setIncrement(increment +1);
        };
        const decrementFun = () =>{
            setDecrement(decrement -1);
        };
  
return (
    <div className="App">
        <h1>useEffect</h1>
        <h1>{increment}</h1>
        <button onClick={incrementFun}>increment</button>

        <h1>{decrement}</h1>
        <button onClick={decrementFun}>decrement</button>
    </div>
);
}

export default Ueeffect
