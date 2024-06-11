import React from 'react';
import { Link } from 'react-router-dom';

export default class MenuButton extends React.Component {
  render() {
    return (
      <Link to="/menu" className="btn btn--menu-desktop">
        <img src="/images/menu.svg" alt="open menu button" />
      </Link>
    );
  }
}
