import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


function Letters(props) {
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
 
     //   raising number to scroll through pulled array
       function raiseNum() {
          setNum(num+1)
         }
        
 
    if (letter && num ) {
    return (

           <div className="letters"> 
            <h2>{`Student: ${letter && letter[num].initials}`}</h2>
            <h2>{`Location: ${letter && letter[num].location}`}</h2>
            <h2>{`Location: ${letter && letter[num].letter}`}</h2> 
            <button id="next-letter" onClick={raiseNum}>Next Letter</button>
 
        </div>
        )

} else{
    return (
        <div className="error-message">
            <h2> Click below to start!</h2>
            <button id="next-letter" onClick={raiseNum}>Start Letters!</button>
        </div>
    )
}


}

export default Letters;