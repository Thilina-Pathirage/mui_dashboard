import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import MainNavigation from './Components/MainNavigation';
import Dashboard from './Components/Pages/Dashboard';
import EventHornbill from './Components/Pages/EventHornbill';
import Deztions from './Components/Pages/Deztions';
import Mustodo from './Components/Pages/Mustodo';
import Hexagon from './Components/Pages/Hexagon';
const App = () => {
  return (
    <div className="App">

      <Router>
        <MainNavigation />
        <main>
          <Switch>

            <Route path="/" exact>
              <Dashboard />
            </Route>

            <Route path="/event" exact>
              <EventHornbill />
            </Route>

            <Route path="/deztions" exact>
              <Deztions />
            </Route>

            <Route path="/mustodo" exact>
              <Mustodo />
            </Route>

            <Route path="/hexagon" exact>
              <Hexagon />
            </Route>

            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
