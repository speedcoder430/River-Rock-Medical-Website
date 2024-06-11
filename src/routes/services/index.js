import React from 'react';
import { Link } from 'react-router-dom';

import { getPrevPath, getNextPath } from '../paths';
import { MenuButton, Header } from '../../components';

// const credits = [
//   'Data collection services',
//   'Personalized assessment and treatment plan',
//   'Primary Healthcare',
//   'Elite Physicians',
//   'Clear Communication',
//   'Specialist consultations',
//   'Avant-Guard Treatments',
//   'One-Hour Visits & No Waiting',
//   'Schedule Online',
//   'Unlimited Email',
//   'Access to Medical Records',
// ];

export default class Services extends React.Component {
  render() {
    const prevPath = getPrevPath(this.props.location.pathname);
    const nextPath = getNextPath(this.props.location.pathname);
    return (
      <div className="section section--services">
        <Header>PRICES AND SERVICES</Header>
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
          <div className="content">
            <div className="membership">
              <img className="logo-circle" src="/images/logo-circle.svg" alt="RiverRock logo" />
              <div className="membership-text">
                <h5>
                  Individual RiverRock Membership&nbsp;&nbsp;
                  <span>/ $11,028 <span className="perYear">per year</span></span>
                </h5>
                <h5>
                  Couples' RiverRock Membership&nbsp;&nbsp;
                  <span>/ $19,019 <span className="perYear">per year</span></span>
                </h5>
              </div>
            </div>
            <div className="description">
              <div className="description-item">
                <p>All of our <a href="./strengths">strengths</a> and <a href="./benefits">benefits</a>, plus:</p>
                <h4>12 Physician Appointments</h4>
                <p>Membership includes up to 12 one-hour appointments per year, whether in-office, or by video/phone.</p>
              </div>
              <div className="description-item">
                <h4>Non-physician services</h4>
                <p>Non-physician services do not count as physician appointments and are free for our members (blood pressure checks, lab draws, EKG, administration of IV's, shots, etc).</p>
              </div>
              <div className="description-item">
                <h4>Biometrics</h4>
                <p>We <a href="./data-assisted.html">gather a lot of data</a> for our members. Our physicians review that data and make targeted recommendations. <br/>Also check out our <a href="./office-privacy.html">Privacy Policy</a>.</p>
              </div>
            </div>
            <div className="initialVisit">
              <h5>
                Initial Visit&nbsp;&nbsp;
                <span>/ $800</span><br />
              </h5>
              <p className="text-content">
                Experience RiverRock, and see if membership is right for you. Your RiverRock doctor will complete your initial assessment, create a plan and begin treatment.<br /><br />
                If you and your doctor both feel that you are a good fit for our practice, you will be offered a membership, and <i>the $800 will be counted toward the cost of membership.</i><br /><br />
                <i>Also please keep in mind that we only accept 150 patients per physician, so space may be limited.</i><br /><br />
              </p>    
              <a className="booking" href="https://riverrock.pro/NewMemberSetup">Book Your Initial Visit&nbsp;&rarr;&nbsp;</a>   
              <h5>Questions?</h5>
              <p className="text-content">Ask us (free, obviously)<br /><a href="tel:+15122130700">512.213.0700</a><br /><a href="mailto:sales@riverrockmedical.com">sales@riverrockmedical.com</a></p>
            </div>     
          </div>
          <p className="section__quote">
            “The price of excellence is discipline.<br />
            The cost of mediocrity is disappointment.”<br />
            — William A. Ward
          </p>
          <span className="section__tip">
            PRICES AND SERVICES
          </span>
        </div>
      </div>
    );
  }
}
