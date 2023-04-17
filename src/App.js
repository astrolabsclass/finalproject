import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TemplateRoute from './TemplateRoute';
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import ContactScreen from './ContactScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import Header from './Header';
import Footer from './Footer';
import GridScreen from './GridScreen';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact={true}>
          <HomeScreen />
        </Route>
        <Route path="/about">
          <AboutScreen />
        </Route>
        <Route path="/contact">
          <ContactScreen />
        </Route>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route path="/signup">
          <SignUpScreen />
        </Route>
        <Route path='/directory'>
          <GridScreen/>
          
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  

    </React.Fragment>
  );
}

export default App;
