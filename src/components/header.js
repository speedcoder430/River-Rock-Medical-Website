import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to="/menu" className="btn btn--menu">
          <img src="/images/menu.svg" alt="open menu button" />
        </Link>
        <span className="header__title">
          {this.props.children}
        </span>
        <a href="https://riverrockmembers.com" className="btn btn--login">
          <img src="/images/tri-right.svg" alt="link to members site" />
        </a>
      </header>
    );
  }
}
