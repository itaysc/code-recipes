
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AppContainer } from './containers';
import './App.css';
import 'react-phone-input-2/lib/style.css'

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/">
              <AppContainer />
          </Route>
      </Switch>
    </Router>
  );
}


export default App;
