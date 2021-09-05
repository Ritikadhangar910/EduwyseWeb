import React from 'react';
import "bootstrap/dist/css/bootstrap.css"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import Preparation from './components/Preparation';
import Preparationdemo from './components/Preparationdemo';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Login from './components/Login';
import Registration from './components/Signup';
import Error from './components/Error';
import Logout from "./components/Logout";
import About from "./components/About";
import Services from "./components/Preparationdemo"




const App = () => {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route path="/" exact><Home/></Route>
    <Route path="/about" ><About/></Route>
    <Route path="/contact" ><Contact/></Route>
    <Route path="/preparation" ><Preparation/></Route>
    <Route path="/preparationdemo" ><Preparationdemo/></Route>
    <Route path="/courses" ><Courses/></Route>

    <Route path="/login" ><Login/></Route>
    <Route path="/services" ><Services/></Route>
    <Route path="/signup" ><Registration/></Route>
    <Route path="/logout" ><Logout/></Route>
    <Route><Error/></Route>
    </Switch>
  <Footer/>
    </>
  )
}

export default App
