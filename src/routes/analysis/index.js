import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getPrevPath, getNextPath } from '../paths';
import { MenuButton, Header } from '../../components';

const options = [
  {
    html: <span>“My doctor is helping me<br />balance work, life, and love”</span>,
    url: 'https://riverrockmedical.com/case1.html'
  },
  {
    html: <span>“My doctor is helping me<br />finish grad school”</span>,
    url: 'https://riverrockmedical.com/case2.html'
  },
  {
    html: <span>“My doctor is helping me<br />finally heal”</span>,
    url: 'https://riverrockmedical.com/case3.html'
  },
  {
    html: <span>“My doctor is helping me<br />enjoy my vacation”</span>,
    url: 'https://riverrockmedical.com/case4.html'
  },
  {
    html: <span>“My doctor is helping me<br />enjoy my vacation”</span>,
    url: 'https://riverrockmedical.com/case5.html'
  }
];

const Analysis = () => {
  const location = useLocation();
  const [optionIndex, setOptionIndex] = useState(0);
  const [anchorY, setAnchorY] = useState(0);

  useEffect(() => {
    setAnchorY(calculateAnchorY(optionIndex));
  }, [optionIndex]);

  const calculateAnchorY = (optionIndex) => {
    const elSvg = document.getElementById('analysis-cover');
    const elOption = document.getElementById(`analysis-option${optionIndex}`);
    const rtSvg = elSvg.getBoundingClientRect();
    const rtOption = elOption.getBoundingClientRect();
    const offsetY = (rtOption.y + (rtOption.height / 2)) - rtSvg.y;
    const ratio = 929.22 / rtSvg.width;
    return offsetY * ratio;
  }

  const handleHoverOption = (optionIndex) => () => {
    setOptionIndex(optionIndex);
    setAnchorY(calculateAnchorY(optionIndex));
  }

  const handleClick = (optionIndex) => () => {
    let newLocation = options[optionIndex].url;
    window.open(newLocation, '_blank');
  }

  const prevPath = getPrevPath(location.pathname);
  const nextPath = getNextPath(location.pathname);

  return (
    <div className="section section--analysis">
      <Header>ROOT CAUSE ANALYSIS</Header>
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
              <svg
                id="analysis-cover"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 929.22 1400"
              >
                <g>
                  <line className="cls-3" x1="0.54" y1="644.22" x2="928.04" y2={anchorY} />
                  <line className="cls-3" x1="861.04" y1="536.72" x2="928.04" y2={anchorY} />
                  <text className="cls-1" transform="translate(358.58 627.56)">
                    <tspan className="cls-2">T</tspan>
                    <tspan x="22.8" y="0">raumas</tspan>
                  </text>
                  <text className="cls-1" transform="matrix(0.98, 0.18, -0.18, 0.98, 523.49, 452.91)">Genetic</text>
                  <text className="cls-1" transform="matrix(0.95, 0.31, -0.31, 0.95, 158.04, 677.12)">Cognitive</text>
                  <polygon className={optionIndex === 0 ? 'cls-4' : 'cls-3'} points="0.55 644.51 402.55 448.51 416.55 6.51 0.55 644.51" />
                  <polygon className={optionIndex === 1 ? 'cls-4' : 'cls-3'} points="416.81 6.51 404.81 448.51 860.8 536.51 416.81 6.51" />
                  <polygon className={optionIndex === 2 ? 'cls-4' : 'cls-3'} points="861.8 538.51 495.05 810.72 2.54 645.51 402.55 448.51 861.8 538.51" />
                  <polygon className={optionIndex === 3 ? 'cls-4' : 'cls-3'} points="417.05 6.72 861.8 538.51 495.05 810.72 417.05 6.72" />
                  <polygon className={optionIndex === 4 ? 'cls-4' : 'cls-3'} points="416.55 3.51 494.55 807.51 2.54 645.51 416.55 3.51" />
                  <text className="cls-1" transform="translate(575.38 719.74) rotate(-36.23)">Behavioral</text>
                  <text className="cls-1" transform="translate(110.39 570.21) rotate(-25.78)">Acute Illness</text>
                </g>
              </svg>
            </div>
            <div className="block--text">
              <h5>RiverRock Root Cause Analysis</h5>
              <p className="text-content">
                We've redefined what <a href="./what-is-health.html">health</a> means - so we had to rethink the common ideas about how to improve it.<br /> <br />
                We start by understanding your goals and motivations; asking <i><strong>why</strong></i>, before we try to figure out <i><strong>how</strong></i>.<br /> <br />
                We use our RiverRock Root Cause Analysis framework to classify health obstacles into 5 categories:
                <ol><li>Cognitive/Emotional</li>
                  <li>Behavioral/Environmental</li>
                  <li>Traumas and Scars</li>
                  <li>Acute Illness and Prevention</li>
                  <li>Genetic</li></ol>
                Then, we <a href="./data-assisted.html">gather data</a> to create a plan of attack to remove whatever obstacles are keeping you from your dream-self. <br /> <br />
                See how it works in the case studies below.
              </p>
              <h5>Case Studies</h5>
              <p>(Click to Read)</p>
              <img className="purpose-cover" src="/images/analysis-cover.svg" alt="RiverRock Root Cause Analysis icon" />
              <div className="options-content">
                {options.map((option, index) => (
                  <div
                    key={index}
                    id={`analysis-option${index}`}
                    className={`option ${index === optionIndex ? 'option--hovered' : ''}`}
                    onMouseOver={handleHoverOption(index)}
                    onClick={handleClick(index)}
                  >
                    {option.html}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="section__quote">
          “Because that’s what true health is – <br />
          the freedom and the potential to <br />
          achieve any goal, to chase any dream.”<br />
          — Dr. Zain Hakeem
        </p>
        <span className="section__tip">
          ROOT CAUSE ANALYSIS
        </span>
      </div>
    </div>
  );
}

export default Analysis;
