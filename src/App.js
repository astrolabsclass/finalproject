import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TemplateRoute from './TemplateRoute';
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import ContactScreen from './ContactScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import GridScreen from './GridScreen';
import { Login } from '@mui/icons-material';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>

        <Switch>
          <TemplateRoute path="/" exact={true} component={HomeScreen} />

          <TemplateRoute path="/about" exact={true} component={AboutScreen} />

          <TemplateRoute path="/contact" exact={true} component={ContactScreen} />

          <TemplateRoute path="/login" exact={true} component={LoginScreen} />

          <TemplateRoute path="/signup" exact={true} component={SignUpScreen} />

          <TemplateRoute path='/directory' exact={true} component={GridScreen} />


        </Switch>

      </BrowserRouter>


    </React.Fragment>
  );
}

export default App;
