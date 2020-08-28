import React from 'react';
import { useState } from 'react';


const Digiclock = () => {
   let time = new Date().toLocaleTimeString();
   const [ctime, setCtime] = useState(time);

   const UpdateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCtime(time);
   }

   setInterval(UpdateTime, 1000);
//callfuntions over intervals
    return(
     <>
       <h1>{time}</h1>
     </>
    )
}

export default Digiclock;