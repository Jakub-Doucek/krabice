import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Todos from './components/todos'
import Organizations from './components/organizations'
import DeliveryPlaces from './components/delivery_places'
import Wishes from './components/wishes'
 
 class App extends Component {
   render() {
     return (
       <div className="App">
         <Router>
           <div>
             

             {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
             <Switch>
               <Route path="/todos">
                 <Todos />
               </Route>
               <Route path="/organizations">
                 <Organizations />
               </Route>
               <Route path="/delivery-places">
                 <DeliveryPlaces />
               </Route>
               <Route path="/">
                 <Wishes />
               </Route>
               <Route path="/">
                 {"HOME"}
               </Route>
             </Switch>
           </div>
         </Router>
       </div>
     )
   }
 }

export default App;


/*
 <nav>
               <ul>
                 <li>
                   <Link to="/">Home</Link>
                 </li>
                 <li>
                   <Link to="/todos">Todos</Link>
                 </li>
                 <li>
                   <Link to="/organizations">Organizations</Link>
                 </li>
                 <li>
                   <Link to="/delivery-places">Delivery Places</Link>
                 </li>
                 <li>
                   <Link to="/wishes">Vánoční Krabice</Link>
                 </li>
               </ul>
             </nav>
 */
