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
          if (num > letter.length){
             setNum (0);
          }
        }
       
        
        console.log(letter.length)
        console.log(num)
        console.log(letter[num])

   

   return (
       <div className="Main">
           
            <h2>{`Student: ${letter[num].initials}`}</h2>
           <h2>{`Location: ${letter[num].location}`}</h2>
           <h2>{`Location: ${letter[num].letter}`}</h2> 
           <button id="next-letter" onClick={raiseNum}>Next Letter</button>

       </div>

       )
   }

