import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Circuits from './components/Circuits/Circuits';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/circuits/:game/:number' component={Circuits} exact/>
      </Switch>
    </Router>
  );
}

export default App;
