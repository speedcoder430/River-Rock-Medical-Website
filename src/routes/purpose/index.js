import React from 'react';
import { Link } from 'react-router-dom';

import { getPrevPath, getNextPath } from '../paths';
import { MenuButton, Header } from '../../components';

export default class Purpose extends React.Component {
  render() {
    const prevPath = getPrevPath(this.props.location.pathname);
    const nextPath = getNextPath(this.props.location.pathname);

    return (
      <div className="section section--purpose">
        <Header>OUR PURPOSE</Header>
        <div className="section__content container">
          {!!prevPath && (
            <Link to={prevPath} className="goto-prev">
              <img src="/images/left-arrow.svg" alt="link to previous page" />
            </Link>
          )}
          {!!nextPath && (
            <Link to={nextPath} className="goto-next">
              <img src="/images/right-arrow.svg" alt="link to next page" />
            </Link>
          )}
          <MenuButton />
          <div className="content-wrapper">
            <div className="content">
              <div className="block--image">
                <img className="purpose-cover" src="/images/purpose-cover.svg" alt="purpose icon" />
              </div>
              <div className="block--text">
                <h5>Our purpose is maximizing your potential.</h5>
                <p className="text-content">
                  <a href="./what-is-health.html">Health</a> is the potential energy that turns dreams into options. <br/> <br/>
                  This is the root of everything we do. RiverRock is its own first patient; our doctors walk the walk with you, constantly innovating, refining our practice, maximizing our own potential.<br/> <br/>
                  We’ve cut the deadweight of mainstream medicine, the outdated ideas and unnecessary bureaucracy that obscure the true purpose of health-care: optimizing health.<br/> <br/>
                  We’ve created the only medical practice that’s free from the unessential. And what we don’t include, creates space for what we do provide: dream-driven healthcare.
                </p>
                <h5>No distractions.</h5>
                <h5>No excuses.</h5>
                <h5>No shortcuts.</h5>
                <h5>Just pure movement forward.</h5>
                <p className="text-content"><a href="./data-assisted.html">Is this just hokey holistic nonsense?</a></p>
              </div>
            </div>
          </div>
          <p className="section__quote">
            “It is not daily increase, but daily decrease.<br />
            Hack away at the unessential”<br />
            -Bruce Lee<br />
          </p>
          <span className="section__tip">
            OUR PURPOSE
          </span>
        </div>
      </div>
    );
  }
}
