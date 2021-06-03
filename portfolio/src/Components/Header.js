import React from "react";
import Typed from "react-typed";
import { Button} from "react-bootstrap";



function Header() {
  return (
    <div className="header">
      <div className="main-text">
        <h1>Mark Hempel</h1>
        <Typed 
        className='typed-text'
        strings={['html', 'css','Javascript','React','Web Developer']}
        typeSpeed={40}
        backSpeed={60}
        loop
        />
        <Button variant='Secondary'>Contact Me</Button>
      </div>
    </div>
  );
}

export default Header;
