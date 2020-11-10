import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from './components/Main';
import NewTask from './components/NewTask';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/new-task'>
          <NewTask />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
