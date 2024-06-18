import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { TransitionGroup, CSSTransition, SwitchTransition } from 'react-transition-group-react-18';

import Menu from './menu';
import Patients from './patients';
import Purpose from './purpose';
import Analysis from './analysis';
import Contact from './contact';
import Strengths from './strengths';
import Benefits from './benefits';
import Values from './values';
import Services from './services';
import Faq from './faq';

import { getPrevPath } from './paths';

const transitionSpeed = 800;

const getTransitionClassName = (locationPathname, prevPathname) => {
  if (locationPathname === prevPathname) {
    return 'slide-right';
  } else if (prevPathname === '/menu') {
    return 'zoom-in';
  } else if (locationPathname === '/menu') {
    return 'zoom-out';
  } else if (locationPathname === getPrevPath(prevPathname)) {
    return 'slide-right';
  } else {
    return 'slide-left';
  }
};

const AnimatedRoute = () => {
  const location = useLocation();
  const [animatedRouteState, setAnimatedRouteState] = useState({
    transitionClassName: '',
    pathname: location.pathname,
  });

  useEffect(() => {
    document.documentElement.style.setProperty('--transition-speed', `${transitionSpeed}ms`);
    const transitionClassName = getTransitionClassName(location.pathname, animatedRouteState.pathname);
    setAnimatedRouteState({
      transitionClassName,
      pathname: location.pathname,
    });
  }, [location.pathname]);

  return (
    <TransitionGroup className={animatedRouteState.transitionClassName}>
      <SwitchTransition>
        <CSSTransition
          timeout={transitionSpeed}
          classNames={"page"}
          key={location.key}
        >
          <Routes location={location}>
            <Route path="/menu" element={<Menu />} />
            <Route path="/" element={<Patients />} />
            <Route path="/purpose" element={<Purpose />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/strengths" element={<Strengths />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/values" element={<Values />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </CSSTransition>
      </SwitchTransition>
    </TransitionGroup>
  );
};

export default AnimatedRoute;
