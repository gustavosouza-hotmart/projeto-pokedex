import React from 'react';
import "./header.style.scss";

interface HeaderProps {
  title: string,
  message: string
};

function Header({title, message, ...props} : HeaderProps){
    return(
      <div className="header">
          <h1>{title}</h1>
          <span className="header__message">{message}</span>
      </div>
    )
}

export default Header;