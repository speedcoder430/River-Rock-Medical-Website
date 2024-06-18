import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getPrevPath, getNextPath } from '../paths';
import { MenuButton, Header } from '../../components';

const Benefits = () => {
  const location = useLocation();
  const prevPath = getPrevPath(location.pathname);
  const nextPath = getNextPath(location.pathname);

  return (
    <div className="section section--benefits">
      <Header>BENEFITS OF RRMC</Header>
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
              <img className="benefits-cover" src="/images/benefits-cover.svg" alt="benefits icon" />
            </div>
            <div className="block--text">
              <h5>Avant-Gard Infrastructure</h5>
              <h6>One-Hour Visits & No Waiting</h6>
              <p className="text-content">
                We schedule all our visits to last a full hour, so you’re never rushed. You respect our time, we respect yours. 98% of our visits start on time.
              </p>
              <h6>Schedule Online</h6>
              <p className="text-content">Schedule with us online and download our app.</p>
              <h6>Thorough Communication</h6>
              <p className="text-content">Medical Question? Email your doctor directly. We use <a href="./communication.html">email as our main method of communication</a> because it improves clarity, and patients can reference our answers at any time.</p>
              <h6>Collaborative Medical Records</h6>
              <p className="text-content">
                At RiverRock, you own your medical records collaboratively in a completely new way. You have full, unlimited access online at any time. You don’t need our permission (or help) to share your records with another physician by fax or e-mail. Share your records right from the RiverRock App.
                <br /> <br />
              </p>


              <h5>Avant-Garde Methods</h5>
              <h6>Online Specialist Consultation</h6>
              <p className="text-content">
                We use the RubiconMD online network to discuss more complex scenarios with academic university specialists, rapidly obtaining tertiary level knowledge, and exponentially improving the quality of primary care.
              </p>
              <h6>Diagnostics</h6>
              <p className="text-content">In-Office Ultrasound, EKG, Spirometry, and VO2Max / Metabolic Testing</p>
              <h6>Data-Collection</h6>
              <p className="text-content">NMR Lipid Analysis, Sleep tracking, Heart Rate Variability and Activity tracking, Continuous glucose monitoring</p>
              <h6>Treatments</h6>
              <p className="text-content">Platelet-rich Plasma (dual-spin kit), Ultrasound-guided injections, Osteopathic Manipulative Treatment, Bio-identical Hormone Treatments</p>
            </div>
          </div>
        </div>
        <p className="section__quote">
          “Talent hits a target no one else can hit; <br />
          Genius hits a target no one else can see.”<br />
          — Arthur Schopenhauer
        </p>
        <span className="section__tip">
          BENEFITS OF RRMC
        </span>
      </div>
    </div>
  );
}

export default Benefits;
