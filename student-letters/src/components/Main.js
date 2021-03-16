import React, { useEffect, useState } from 'react';


export default function Main () {

   const [num, setNum] = useState(0)
   const [letters, setLetters] = useState([])
   const url = "https://sei1130-letters.herokuapp.com/students"

   let letterArray = []
   //pulling data
   useEffect(() => {
      
        fetch(url)
      .then(res => {
      return res.json();
       })
      .then(res => {
     console.log("success!", res)
   //   setLetters(res)
     letterArray.push(res)
   //   setLetters(letterArray)
     console.log(letterArray)
      })
      .catch(err => {
     console.log("something went wrong...", err);
      });
       }, )      

       console.log(letterArray)
   //raising number to scroll through pulled array
    function raiseNum() {
        setNum(num+ 1 )
         console.log(num)
       }
   
       console.log(num)
       console.log(letterArray)
       console.log(letterArray[0])
   
   return (     
        
    <div className = "Main-container">
         <div className = "Main">
            <div className="Main-text">

            <h3>Initials: works </h3>
        
{/*    
            <h3>Initials:  { letterArray && letterArray[0].initials}</h3>
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

       
 
