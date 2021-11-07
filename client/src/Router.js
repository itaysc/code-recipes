import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home, SignUp } from './pages';
const MainRouter =  (props)=>{
    return (
        <Router>
           <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/signup"><SignUp /></Route>
           </Switch>
        </Router>
     
    )
}

export default MainRouter;