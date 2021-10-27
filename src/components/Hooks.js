import React, { useEffect, useState } from "react";


const Hooks = () => {
    const [num,setnum]=useState(1);
    const [counter,setcounter]=useState(1);
    const handleclick=()=>{
        setnum(num+1);
    }
    const handleclicks=()=>{
        setcounter(counter+1);
    }
    useEffect(()=>{
        console.log("called");
    },[num])

    return (
        <div>
            Test Hooks
            {num}
            <button onClick={handleclick}>Click</button>
            Test counter
            {counter}
            <button onClick={handleclicks}>Click counter</button>
        </div>
    );
};

export default Hooks;