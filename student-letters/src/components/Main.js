import React from 'react';
import { Route } from 'react-router-dom'
import Home from './Home'
import Letters from './Letters'


export default function Main () {
return (
   <div className="Main">
    
     
     <Route exact path="/" component={Home} />
     <Route exact path="/letters"component={Letters}/>
   


   </div>
)
}