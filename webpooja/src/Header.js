import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

 const Header=(props)=> {
   const {branding}=props;
  return (
   <nav className="navbar navbar-expand-sm
   navbar-dark bg-danger mb-3 py-0">
   <div className="container">
     <a href="/" className="navbar-brand">
       {branding}
     </a>
     <div>
       <ul className="navbar-nav mr-auto">
       <li className="nav-item"></li>
       <Link to="/" className="nav-link">
       <i className="fas fa-home"></i>
         Home
       </Link>
       <li className="nav-item"></li>
       <Link to="/Contact/add" className="nav-link">
       <i className="fas fa-plus"></i>
         Add
       </Link>
       <li className="nav-item"></li>
       <Link to="/about/id" className="nav-link">
       <i className="fas fa-question"></i>
         About
       </Link>
       </ul>
     </div>
   </div>

   </nav>
  )
};
Header.defaultProps={
  branding:'My App'
}
Header.propTypes={
  branding:PropTypes.string.isRequired
}
// const headingStyle={
//   color:'green',
//   fontSize:'50px'
// };
export default Header;

