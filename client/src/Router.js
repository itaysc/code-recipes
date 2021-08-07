import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './pages';
export default (props)=>{
    return (
        <Router>
           <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
           </Switch>
        </Router>
     
    )
}