
import React, { useState } from 'react';

function Count() {

    const [count, setCount] = useState(0)

    const myFun1 = () => {
        console.log("click");
        setCount(count + 1)
    }
    const myFun2 = () => {
        console.log("click");
        setCount(count - 1)
    }

    return (

        <div className=" flex justify-center items-center mt-10 bg-sky-200 h-[500px]">

            <button onClick={myFun1}
                class="text-zinc-700 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-red-500 via-[rgba(121,121,121,0.16)] to-red-400 rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700 font-bold"
            >
                Increment [+]
            </button>

            <h1 className='text-5xl ms-5 me-5'>{count}</h1>
            <button onClick={myFun2}
                class="text-zinc-700 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-red-500 via-[rgba(121,121,121,0.16)] to-red-400 rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700 font-bold"
            >
                Decrement [-]
            </button>

        </div>
    );
}


export default Count
