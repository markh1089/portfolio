import React from "react";
import Typed from "react-typed";

function Header() {
  return (
    <div className="header">
      <div className="main-text">
        <h1>Mark Hempel</h1>
        <Typed 
        className='typed-text'
        strings={['html', 'css','Javascript','React','Web Developer']}
        />
      </div>
    </div>
  );
}

export default Header;
