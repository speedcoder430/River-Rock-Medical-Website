import React from 'react';
import { Link } from 'react-router-dom';

import { getPrevPath, getNextPath } from '../paths';
import { MenuButton, Header } from '../../components';

export default class Contact extends React.Component {
  render() {
    const prevPath = getPrevPath(this.props.location.pathname);
    const nextPath = getNextPath(this.props.location.pathname);

    return (
      <div className="section section--contact">
        <Header>CONTACT</Header>
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
            <div className="box box--origins">
              <div className="box__title">
                <h2 className="origins">ORIGINS</h2>
                <p className="philosophy">
                  RiverRock’s philosophy is about encouraging patients to pursue their dreams and to fulfill their potential by pursuing optimum  long-term health, instead of just providing “good enough” healthcare. <a href="./journey.html">Read The Full Origin Story</a>
                </p>
              </div>
              <p className="box__content">
                “Nothing compares to the challenge of medicine! Medicine requires judgment, ethics, and guts to practice well. It’s messy and beautiful, and I love being able to practice it to the fullest.”-ZH
              </p>
            </div>
            <div className="box box--profile">
              <div className="box__info">
                <img className="zh-photo" src="/images/zh-photo.png" alt="photos of Dr. Zain Hakeem, founder and physician at RiverRock Medical" 
                  srcset="/images/zh-photo.png 1506w,
                          /images/zh-photo-281x300.png 281w,
                          /images/zh-photo-655x698.png 655w,
                          /images/zh-photo-768.818.png 768w,
                          /images/zh-photo-961x1024 961w"
                  sizes="(min-width: 768px) 250px, (max-width: 590px) 143px, 25vw" 
                />
                <p className="zh-title">
                  <b>Dr. Zain Hakeem,</b>&nbsp;
                  <i>
                    Founder<br />
                    Board Certified Internal Medicine<br />
                    Board Certified Pediatrics
                  </i>
                </p>
              </div>
              <p className="box__bio">
                Dr. Hakeem grew up in Baton Rouge and did his undergraduate training in philosophy at LSU. He completed his Osteopathic medical degree in Fort Worth at the Texas College of Osteopathy, and then went on to complete a dual residency in the specialties of Internal Medicine and Pediatrics, and is Board Certified in Internal Medicine and Board Certified in Pediatrics. In addition to working at RiverRock, Dr. Hakeem also still practices hospital medicine, to maintain his skills in acute medical care, and to maintain an awareness of the cost of errors in primary care.<br /><br />
                Due to COVID-19, Dr. Hakeem will be spending more time working in hospitals and ICUs, traveling as far as Atlanta, or other hotspots, and may need to have patients seen by covering physicians. This is regrettable, but necessary, since his skills as an acute care physician are currently urgently needed, and after a hospital shift, he must quarantine and test before seeing patients in the office.<br /><br /> 
                He is also the creator of the <a href="https://rxbayes.com">Rx-Bayes App</a> – which is a statistical app to help doctors understand that tests are not always accurate, and how to tell when the tests are more likely to be wrong. He’s also given <a href="https://youtu.be/txWNQGNkeqY">a lecture</a> for patients to understand the basics of that.
              </p>
            </div>
            <div className="contact-info">
              <img className="logo-circle" src="/images/logo-circle.svg" alt="RiverRock logo" />
              <a href="https://goo.gl/maps/WQuVi8eDFkeuuQCC9">
                <p className="address">
                  711 W 38th St<br />
                  Suite D1 Room 105<br />
                  Austin, TX 78705<br />
                </p>
              </a>
              <p className="phone">
                <a href="tel:512-213-0700">512-213-0700</a>
              </p>
              <p className="email"><a href="mailto:sales@riverrockmedical.com">sales@riverrockmedical.com</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
