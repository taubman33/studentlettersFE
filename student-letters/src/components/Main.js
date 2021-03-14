import React from 'react';

function Main(props) {
    return (
        <div className = "Main">
   <h3>Initials: TW </h3>
   <h3>Location: CA </h3>
   <h3>Letter:Don’t worry about how hard it gets.  You got this. Look to your classmates they are your backbone.  You will never find better people to go though this experience with then them.  Study the basics, go to office hours every night, even if you don’t have questions just go.  Trust that everyone near you has the same struggles and is looking for someone just like you. Most importantly, YOU. CAN. DO. THIS </h3>

   {/* <h3>Initials: {letters.intials}</h3>
   <h3>Location: {letters.location} </h3>
   <h3>Letter: {letters.letter} </h3> */}



    <button id="next-letter">Next Letter</button>

        </div>
    );
}

export default Main;