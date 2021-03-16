import React, { useEffect, useState } from 'react';


export default function Main () {

   const [letter, setLetter] = useState({});
   const [num, setNum] = useState(0)
   useEffect(() => {
       fetch(`https://sei1130-letters.herokuapp.com/students`)
           .then((res) => res.json())
           .then(res => {
               console.log(res)
               setLetter(res)
           })
           .catch(console.error);
   }, []);

      //raising number to scroll through pulled array
      function raiseNum() {
         setNum(num+ 1 )
          console.log(num)
        }
    
        console.log(num)

   

   return (
       <div className="stateDetails">

           <h2>{`Student: ${letter.initials}`}</h2>
           <h2>{`Location: ${letter.location}`}</h2>
           <h2>{`Location: ${letter.letter}`}</h2>
           <button id="next-letter" onClick={raiseNum}>Next Letter</button>

       </div>

       )
   }

