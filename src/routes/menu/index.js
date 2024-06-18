import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="section section--menu">
      <div className="section__content">

        <nav className="nav">
          <img className="nav__logo" src="/images/logo.svg" alt="nav__logo" />
          <span className="motto">Dream-driven healthcare</span>
          <a href="https://riverrockmembers.com" className="btn btn--login">
            <span>
              MEMBER<br />
              LOGIN
            </span>
            <img src="/images/tri-right.svg" alt="" />
          </a>
        </nav>

        <div className="content">
          <div className="a-center">
            <div className="box">
              <span className="motto-mobile">Dream-driven healthcare</span>
              <img className="double-tri" src="/images/double-tri.svg" alt="" />
              <img className="slash" src="/images/slash.svg" alt="" />
              <Link to="/" className="btn btn--image btn--you">
                <img src="/images/tri-down.svg" alt="" />
                <span>YOU</span>
              </Link>
              <Link to="/purpose" className="btn btn--image btn--purpose">
                <img src="/images/purpose-outline.svg" alt="" />
                <span>
                  PURITY OF<br />
                  PURPOSE
                </span>
              </Link>
              <Link to="/analysis" className="btn btn--image btn--root">
                <img src="/images/root-outline.svg" alt="" />
                <span>
                  ROOT CAUSE ALGORITHM
                </span>
              </Link>
              <Link to="/values" className="btn btn--image btn--values">
                <img src="/images/values-bg.svg" alt="" />
                <span>
                  VALUES
                </span>
              </Link>
              <Link to="/strengths" className="btn btn--image btn--strengths">
                <img src="/images/strengths-bg.svg" alt="" />
                <span>
                  STRENGTHS
                </span>
              </Link>
              <Link to="/benefits" className="btn btn--image btn--benefits">
                <img src="/images/benefits-bg.svg" alt="" />
                <span>
                  BENEFITS
                </span>
              </Link>
              <Link to="/faq" className="btn btn--text btn--about">
                FAQ
              </Link>
              <Link to="/contact" className="btn btn--text btn--contact">
                ABOUT
              </Link>
              <Link to="/services" className="btn btn--text btn--services">
                SERVICES / PRICES
              </Link>
            </div>
          </div>
        </div>

        <nav className="nav-mobile">
          <Link to="/contact" className="btn btn--contact">
            CONTACT
          </Link>
          <a href="https://riverrockmembers.com" className="btn btn--login">
            <span>
              MEMBER<br />
              LOGIN
            </span>
            <img src="/images/tri-right.svg" alt="" />
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
