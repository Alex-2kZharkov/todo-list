import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import NewTask from './components/NewTask';
import UpdateTask from './components/UpdateTask';

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
        <Route path='/update-task/:id' component={UpdateTask} />       
      </Switch>
    </Router>
  );
}

export default App;
