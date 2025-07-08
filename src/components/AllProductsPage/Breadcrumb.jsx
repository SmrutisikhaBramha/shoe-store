import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = ({ current }) => {  

  return (
    <div className="breadcrumb">
       <Link to="/" className="breadcrumb-link">Home</Link> 
      <span className="breadcrumb-separator">{'>'}</span>
      <span className="breadcrumb-current">{current}</span>
    </div>
  );
};

export default Breadcrumb;
