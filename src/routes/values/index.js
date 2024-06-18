import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getPrevPath, getNextPath } from '../paths';
import { MenuButton, Header } from '../../components';

const Values = () => {
  const location = useLocation();
  const prevPath = getPrevPath(location.pathname);
  const nextPath = getNextPath(location.pathname);

  return (
    <div className="section section--values">
      <Header>OUR VALUES</Header>
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
          <div className="box">
            <h5>Self-Reliance and Integrity</h5>
            <p className="text-content">
              We're more likely to prescribe a book than a pill, because a band-aid isn't a solution.<br /><br />
              Our partnership with patients is a two-way street, and we work only with those patients who are ready to accept responsibility for their half of that partnership.<br /><br />
              At the same time, we don’t tell our patients to do one thing and then do something else ourselves. Our doctors believe in healthy behaviors, and we take our own medicine – we make time to exercise, eat healthy, keep close relationships, and sleep properly; all the things we tell our patients to do.
            </p>
          </div>
          <div className="box">
            <h5>Honesty and Transparency</h5>
            <p className="text-content">
              The doctor-patient relationship is extraordinary; an interaction based on trust in regard to hard truths about matters of life and death.  <br /> <br />
              Small decisions can have a huge impact, and physicians train ourselves to make the best possible decisions.  <br /> <br />
              But that process cannot even begin without a respect for the truth. <br /> <br />
              For that reason, contrary to the rest of the medical industry, we do not hide or lie about our prices and we make them simple to understand.
            </p>
          </div>
          <div className="box">
            <h5>Responsibility</h5>
            <p className="text-content">
              It's easy to take responsibility for success. At RiverRock, we also value our mistakes, so we can eliminate them.<br /> <br />
              We aren’t afraid to say “I don’t know”, change our minds, or take on a case that means we’ll have to learn from our patient, do research and consult specialists.  <br /> <br />
              RiverRock’s elite physicians use consultants and each other to double-check our work, so we can learn more, learn faster, and advance farther.
            </p>
          </div>
          <div className="box">
            <h5>Big Dreams, Constant Innovation</h5>
            <p className="text-content">
              The true calling of primary care should be in pursuing optimum health. <br /> <br />
              We’re always looking for new ways to achieve our patients’ deepest goals. <br /> <br />
              Whether that’s incorporating project management software, app development, or creating new recipes, we are creatively helping our patients solve the problems that stand between them and their goals.
            </p>
          </div>
          <img className="values-cover" src="/images/values-cover.svg" alt="our values icon"/>
        </div>
        <p className="section__quote">
          “Anything that changes your values changes your<br />
          behavior.” — George Sheehan
        </p>
        <span className="section__tip">
          OUR VALUES
        </span>
      </div>
    </div>
  );
};

export default Values;
