import React from 'react';
import { Link } from 'react-router-dom';//create multiple pages in a React app without reloading the page.
import './Breadcrumb.css';

const Breadcrumb = ({ current }) => {  //You're using props, and you're only extracting one prop called current.current = the current page name (like "All Products").

  return (
    <div className="breadcrumb">
       <Link to="/" className="breadcrumb-link">Home</Link> {/*The / means the root path of your website. */}
      <span className="breadcrumb-separator">{'>'}</span>
      <span className="breadcrumb-current">{current}</span>
    </div>
  );
};

export default Breadcrumb;
