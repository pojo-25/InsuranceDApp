import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppNavbar from './components/AppNavbar';
import Home from './components/views/Home';
import About from './components/views/About';
import DeployScreen from './components/views/DeployScreen';
import InsuranceCompany from './components/participants/InsuranceCompany';
import Subscriber from './components/participants/Subscriber';
//import { AcceptWager } from "./components/participants/SubscriberViews";

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/deploy" component={DeployScreen} />
          <Route path="/app/insurancecompany" component={InsuranceCompany} />
          <Route path="/app/subscriber" component={Subscriber} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

