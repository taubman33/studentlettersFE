import React from 'react';
import { Link } from 'react-router-dom'

export default function Home(props) {
    return (
        <div className="Home">
            <h3 id="homeh3"> Welcome! These letters were all written to you by students who completed the 11/30 SEI cohort. </h3>
            <p id="homeP"> Read through and take in some wisdom from people who were in your shoes almost four months ago.
             <br/> You will see how common it is for students to feel overwhelmed, drained, stressed and tired through these next few months 
             <br/> But by working together, putting in the effort, going to office hours and building up a community of peers and friends to help you,
             <br/> even if you come in with minimal coding experience, you will be able to succeed in this. 
            </p>

        </div>
    );
}
