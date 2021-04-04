import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from "./components/pages/Home";
import About from "./components/pages/About"
import Navbar from "./components/layout/Navbar"
import NotFound from "./components/pages/NotFound"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CheckInfo from './components/todo/CheckInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/todo/check/:id" component={CheckInfo} />
          <Route  component={NotFound} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
