import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getPrevPath, getNextPath } from '../paths';
import { MenuButton, Header } from '../../components';

const options = [
  {
    question: <span>“Why is there a Membership? <br />Don't you just charge per visit? <br /> What is Concierge Medicine?”</span>,
    answer: <div>
      <p>Concierge Medicine is a way of structuring healthcare that aligns the interests of doctors and patients by incentivizing health. </p>
      <p>It's relatively new, so there isn’t one exact definition, but the basic deal is this – you pay a set yearly fee, and in return, you get taken care of by a doctor who takes care of you the way it’s supposed to be done.</p>
      <p>This creates a context that promotes thoughtful diagnosis, treatment and preventative planning, without the insurance company's conflict of interest. Understanding the individualized stressors and root causes of illness cannot be achieved in a per-visit context. Our independence from third-party requirements is our greatest asset, and allows us to fulfill the original mission of RiverRock – uncompromising focus on maximizing our patients’ health – your health.</p>
      <p><a href="./what-is-concierge-medicine-definitions-part-1.html">Learn More &rarr;</a> </p>
    </div>
  },
  {
    question: <span>“Do you accept insurance?”</span>,
    answer: <div>
      <p>Insurance creates a huge barrier by limiting care to the “current standard”, which is usually 13 years behind known science. Furthermore, insurance operates on an illness model, not a health model, and that creates a tremendous conflict of interest.</p>
      <p>We do not accept insurance. We strongly believe that the insurance model of primary care leads to worse care because the doctor is effectively working for the insurance company, not the patient.</p>
      <p>We believe "You're working for whoever pays ya'" &mdash; and we work exclusively for our patients. Since we work exclusively for our patients, and represent only their interests, we do not take a single dollar from insurance.</p>
      <p>Letting insurance companies control healthcare has created our current broken system. You can read more about that devolution <a href="./what-is-concierge-medicine-history-part-2.html">here &rarr;</a>.</p>
    </div>
  },
  {
    question: <span>“How many patients do you accept?”</span>,
    answer: <div>
      <p>We accept a maximum of 150 paying patients plus 50 pro-bono patients per physician. The average primary care doctor has 2500 - 3000 patients on their panel. We get to know you and your dreams at a level of detail that is unimaginable in an insurance-based model.</p>
    </div>
  },
  {
    question: <span>“Can I buy membership for my significant other/child/parent/friend?”</span>,
    answer: <div>
      <p>Yes! We certainly allow memberships to be purchased as a gift for that dream-driven someone in your life! We can even provide an attractive gift box set - Contact us to order: <a href="mailto:sales@riverrockmedical.com">sales@riverrockmedical.com</a></p>
    </div>
  },
  {
    question: <span>“Dream-Driven Healthcare - is that just a marketing gimmick?”</span>,
    answer: <div>
      <p>Nope. It's for real. We base our core practice around the idea of helping you figure out what your deepest motivations are, what obstacles are in the way, and how you can achieve your dreams. That's maximizing health.</p>
      <p>We do get that sometimes the whole "dream-driven" thing comes off a bit hokey (though we mean every word). If you want a more detailed, nitty-gritty view of what we do, checkout our thoughts on how we use data to achieve our dream-driven targets. <a href="./data-assisted.html">Click Here</a></p>
    </div>
  },
  {
    question: <span>“What does &lsquo;Health&rsquo; really mean?<br />Why do I even need more health?”</span>,
    answer: <div>
      <p>We define health as 'freedom'. It's a pretty broad definition, but it's something we've thought about for a long time, and it's something we really believe in.</p>
      <p>If you like the fancier, more precise word, it means autonomy. And we believe that viable dreams are the best markers of autonomy.</p>
      <p>That’s what health is. The power to choose which dreams you want to make real.</p>
      <p>It’s about giving you more options, more autonomy, more freedom. It’s about increasing the number of things you can choose to do – the number and the quality of the options you have.</p>
      <p><a href="./what-is-health.html">Learn More &rarr;</a></p>
    </div>
  },
  {
    question: <span>“What makes RiverRock different?”</span>,
    answer: <div>
      <p>At RR, we know that common best practices are not good enough. Medicine, on average, lags 13 years behind known science.</p>
      <p>We partner with our patients to go far beyond 'average'.</p>
      <p>In order to dream at an even higher level of health, you have to have to have concrete goals, something to shoot for, but even more important, you have to know WHY you are shooting for that goal. By starting with an understanding of our patients deepest dreams and motivations, we are able to direct the planning of their care to specifically target their desired outcomes.</p>
      <p>How do we get there? With our <a href="./analysis">RiverRock Root Cause Analysis &rarr;</a></p>
    </div>
  },
  {
    question: <span>“What defines a RiverRock patient?”</span>,
    answer: <div>
      <p>People who have bigger dreams.</p>
      <p>That is – people who are willing to partner with their doctor to solve problems. RiverRocks are people who say, “I want a life beyond the average. I want not only to dream big, but to chase and fulfill those dreams. So, if my doctor gives me a pathway, I’m going to walk that path, because he’s helping me overcome my obstacles, so I can pursue my dreams.”</p>
      <p>How do we get there? With our <a href="./analysis">RiverRock Root Cause Analysis &rarr;</a></p>
    </div>
  },
  {
    question: <span>“Can I use my HSA?”</span>,
    answer: <div>
      <p>Honestly no one really knows. Unfortunately, the IRS has provided no guidance on this matter, and most analysts consider concierge membership fees to be inadmissible for reimbursement or deduction. Unless this changes, we cannot advise our patients to use HSA dollars for our membership.</p>
      <p>Pending legislation, <a href="https://www.congress.gov/bill/115th-congress/house-bill/6199">Bill HR 6199</a>, might change this, but while it was passed in the House (July 2018), it is now in the Senate, and no further action has been recently taken (as of August 2019).</p>
      <p>However, the RiverRock contract includes both membership fees and visit fees. When a visit is used to receive medical services, it could become a qualified medical expense and thus qualify for HSA reimbursement. The best analysis we have found of this issue is from the American Bar Association (<a href="https://www.americanbar.org/groups/health_law/publications/aba_health_esource/2016-2017/july2017/conciergephysician/">here</a>). Using example 4 as a guide, based on the structure of the RiverRock contract, it is possible that you could be reimbursed for the listed value for each RiverRock Visit that you actually use (after you have used it). However, you should consult your tax attorney for specific advice before pursuing this. <a href="./images/RiverRockWebsiteMcCoyMeme.jpg">We are doctors, not tax law experts</a>.</p>
    </div>
  },
];
const Faq = () => {
  const [optionIndex, setOptionIndex] = useState(-1);
  const location = useLocation();
  const prevPath = getPrevPath(location.pathname);
  const nextPath = getNextPath(location.pathname);

  const handleClickOption = (index) => {
    if (optionIndex === index) {
      setOptionIndex(-1);
    } else {
      setOptionIndex(index);
    }
  };

  return (
    <div className="section section--faq">
      <Header>FAQ</Header>
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
          <h5>FAQ</h5>
          <div className="options-content">
            {options.map((option, index) => (
              <div
                key={`question${index}`}
                className={`option ${index === optionIndex ? 'option--selected' : ''}`}
                onClick={() => handleClickOption(index)}
              >
                {option.question}
                <div
                  key={`answer${index}`}
                  className={`answer ${index === optionIndex ? 'answer--selected' : ''}`}
                >
                  {option.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;