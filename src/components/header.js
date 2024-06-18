import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
  return (
    <header className="header">
      <Link to="/menu" className="btn btn--menu">
        <img src="/images/menu.svg" alt="open menu button" />
      </Link>
      <span className="header__title">
        {children}
      </span>
      <a href="https://riverrockmembers.com" className="btn btn--login">
        <img src="../../public/images/tri-right.svg" alt="link to members site" />
      </a>
    </header>
  );
}

export default Header;
