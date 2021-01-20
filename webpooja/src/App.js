import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Header from './Header';
import Contacts from './Contacts';
import {Provider} from './Context';
import About from "./components/pages/About";
import  AddContact  from "./components/AddContact";
import  EditContact  from "./components/pages/EditContact";

import Notfound from './components/pages/Notfound';



const App=()=> {
  return (
    <>
    <Provider>
    <Router>
  <Header />
  <div className="container">
  <Switch>
    <Route exact path="/" component={Contacts} />
    <Route exact path="/contact/add" component={AddContact} />
    <Route exact path="/contact/edit/:id" component={EditContact} />

    <Route exact path="/about/:id" component={About} />
    <Route component={Notfound}/>

    
  </Switch>
 
  </div> 
  </Router>
  </Provider>
   </>
  );
}

export default App;
