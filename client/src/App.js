import { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';

import './App.css';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <BrowserRouter>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </Fragment>
        </BrowserRouter>
      </ContactState>
    </AuthState>
  );
}

export default App;
