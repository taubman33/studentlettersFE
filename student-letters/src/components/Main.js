import React, { useEffect, useState } from 'react';


export default function Main () {

   const [num, setNum] = useState(0)
   const [letters, setLetters] = useState([])
   const url = "https://sei1130-letters.herokuapp.com/students"


   //pulling data
   useEffect(() => {
        fetch(url)
      .then(res => {
      return res.json();
       })
      .then(res => {
     console.log("success!", res);
     console.log("success!", res[0])
     console.log("success!", res[0].initials)
      })
      .catch(err => {
     console.log("something went wrong...", err);
      });
       }, )      


   //raising number to scroll through pulled array
    function raiseNum() {
        setNum(num+ 1 )
         
         console.log(num)
         // console.log(letters.length)
         // if (setNum > letters.length) {
         //  setNum(0)
         //  console.log("max length reached")
       }
   
       console.log(num)
    
   
   return (     
        
    <div className = "Main-container">
         <div className = "Main">
            <div className="Main-text">

            <h3>Initials: works </h3>
 
            {/* <h3>Initials:  { letters && letters[0].initials}</h3>
             */}
             
            {/* <h3>Location: {letters && letters[num].location} </h3>
            <h3>Letter: {letters && letters[setNum].letter} </h3> 
         
              */}
            
            </div>

            <button id="next-letter" onClick={raiseNum}>Next Letter</button>
            

          
            </div>
        </div>
       );
   }

       
 
