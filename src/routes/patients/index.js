import React from 'react';
import { Link } from 'react-router-dom';

import { getPrevPath, getNextPath } from '../paths';
import { MenuButton, Header } from '../../components';

export default class Patients extends React.Component {
  startImageAnimation() {
    document.getElementById('man-transparent').addEventListener('load', e => {
      e.target.classList.add('loaded');
    });
  }
  componentDidMount() {
    this.startImageAnimation();
  }
  render() {
    const prevPath = getPrevPath(this.props.location.pathname);
    const nextPath = getNextPath(this.props.location.pathname);

    return (
      <div className="section section--patients">
        <Header>YOU</Header>
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
                <img className="man-transparent" id='man-transparent' src="/images/man-transparent.png" 
                  alt="Bearded Man in Profile with juxtaposed tree silhouette" 
                  srcSet="/images/man-transparent.png 3096w,
                          /images/man-transparent-291x300.png 291w,
                          /images/man-transparent-655x676.png 655w,
                          /images/man-transparent-768x793.png 768w,
                          /images/man-transparent-992x1024.png 992w"
                  sizes="(min-width: 1160px) 510px, 43.5vw"
                />
                <img className="tri-down-outline" src="/images/tri-down-outline.svg" alt="our patients icon"/>
              </div>
              <div className="block--text">
                <img className="logo-text" src="/images/logo-text.svg" alt="text based logo" />
                <p className="motto">Dream-driven healthcare</p>
                <p className="text-content">
                  You have big dreams. Those dreams aren't just talk; your dreams are your driving force. <br /><br />
                  You eat clean, workout hard, but sometimes you wonder what to make of conflicting studies; you wonder how to get the next edge, make the next upgrade. <br /><br />
                  You want to partner with a doctor to improve sleep, shave down your race time, and figure out how to enjoy your great grandkids; but somehow you always seem to know more than your doctor.<br /><br />
                  Since it's hard to improve what you don't measure, you think surely there's a way to take targeted actions toward your health goals, using the latest tech. <br /><br />
                  You're biohacking, meditating, and your doctor just looks at your bloodwork and says "it's fine, you're healthy". You're trying to solve challenges your doctor can't even see. <br /><br />
                  You know that feeling good comes from being good, and being good comes from doing good, every day. <br /><br />
                  You're not moving away from your problems - your dreams are driving you toward excellence.<br /><br />
                  You're a RiverRock - <a href="./services">Become a member</a>.
                </p>
              </div>
            </div>
          </div>
          <p className="section__quote">
            “Don’t be pushed by your problems. Be led by your dreams.”<br />
            -Ralph Waldo Emerson
          </p>
          <span className="section__tip">
            OUR PATIENTS
          </span>
        </div>
      </div>
    );
  }
}
