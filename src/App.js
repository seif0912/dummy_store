import Hero from './components/Hero'
import Shop from './components/Shop'
import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Hero />
        </Route>
        <Route exact path='/shop'>
          <Shop />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
