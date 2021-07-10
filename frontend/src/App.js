import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

import { Crud } from './components/Crud'
import { Main } from './components/Main'


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/crud" component={Crud} />
        <Route path='/' component={Main}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
