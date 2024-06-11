import React from 'react';
import { Link } from 'react-router-dom';

import { getPrevPath, getNextPath } from '../paths';
import { MenuButton, Header } from '../../components';

export default class Strengths extends React.Component {
  render() {
    const prevPath = getPrevPath(this.props.location.pathname);
    const nextPath = getNextPath(this.props.location.pathname);

    return (
      <div className="section section--strengths">
        <Header>OUR STRENGTHS</Header>
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
                <img className="strengths-cover" src="/images/strengths-cover.svg" alt="strength icon" />
              </div>
              <div className="block--text">
                <h5>The RiverRock Vision</h5>
                <p className="text-content">
                  It's hard to explain how differently we see primary care. Your doctor will personalize a treatment plan for you using our unique 5-point RiverRock Root Cause Analysis Algorithm. <a href="./analysis">Case Studies</a><br /><br />
                </p>
                <h5>Dream-driven, Data-assisted</h5>
                <p className="text-content">
                  Your dreams define our targets, but our methods are rigorously analytic.<br /><br /> In addition to keeping up to date on the latest <a href="./studies.html">studies</a>, our board-certified elite physicians are trained in advanced methods, such as long-tail statistics, motivational interviewing, and avoiding cognitive errors.<br /><br />Our care is grounded in established science (<a href="https://docs.google.com/document/d/1YNEjr8PfzfMcZhx0CmxV7AvXH-evZxLdob696GPpWWk/edit?usp=sharing">with caveats</a>), but goes beyond what's established today, into the methods of tomorrow. Because it's hard to improve what you can't measure, we help you with health data collection, and we are prepared to discuss whatever patterns we discover. <a href="./data-assisted.html">Learn more</a><br /><br />
                </p>
                <h5>Clear Communication</h5>
                <p className="text-content">
                  Despite their deep knowledge, our Physicians have mastered a "forgotten art" - talking and planning with you in plain English, without medical-ese.<br /><br /> You never leave confused about your care plan<br /><br />
                </p>
                {/* <h5>Specialist Consultations</h5>
                <p className="text-content">
                  We use the RubiconMD online network to discuss more complex scenarios with academic university specialists, obtaining tertiary level knowledge immediately, without waiting for the referral &#8594; appointment &#8594; records-request cycle. Even better - we can consult multiple specialists at once, exponentially improving the quality of care.<br /><br />
                </p> */}

              </div>
            </div>
          </div>
          <p className="section__quote">
            “There's a better way to do it –<br />
            Find it.”<br />
            — Thomas Edison”
          </p>
          <span className="section__tip">
            OUR STRENGTHS
          </span>
        </div>
      </div>
    );
  }
}
