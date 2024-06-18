import React from 'react';
import { Link } from 'react-router-dom';

const MenuButton = () => {
  return (
    <Link to="/menu" className="btn btn--menu-desktop">
      <img src="/images/menu.svg" alt="open menu button" />
    </Link>
  );
}

export default MenuButton;
