import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AddTestimonial from './admin-component/AddTestimonial'
import UpdateTestimonial from './admin-component/UpdateTestimonial'
import Dashboard from './admin-component/Dashboard'
import Home from './mainPage/Home'
import Page404 from './admin-component/404'
import Navbar from './mainPage/Navbar';
// import {useState,useEffect} from 'react'
function App() {
 
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/addtestimonial" component={AddTestimonial} />
      <Route exact path="/updatetestimonial/:id" component={UpdateTestimonial} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="*" component={Page404} />
     </Switch>
      </Router>
    </div>
  );
}

export default App;
