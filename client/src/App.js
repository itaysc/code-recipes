
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AppContainer } from './containers';
import './App.css';


function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
              <AppContainer />
          </Route>
      </Switch>
    </Router>
  );
}


export default App;
