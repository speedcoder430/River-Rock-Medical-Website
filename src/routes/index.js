import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsMobile } from '../actions';
import AnimatedRoute from './AnimatedRoute';

const Sections = () => {
  const dispatch = useDispatch();

  const handleWindowSizeChange = () => {
    const isMobile = (window.innerWidth < 768);
    dispatch(setIsMobile(isMobile));

    let availableWidth = window.innerWidth - 100;
    let contentWidth = 820;
    let availableHeight = window.innerHeight - 100;
    let contentHeight = 820;
    let scale = Math.min(availableWidth / contentWidth, availableHeight / contentHeight);
    document.documentElement.style.setProperty('--menu-scale', scale);
  };

  const transitionAnimationAdjustments = (e) => {
    e.stopPropagation();
    let xAdjust = 50 - ((e.pageX / window.innerWidth) * 100);
    let yAdjust = 50 - ((e.pageY / window.innerHeight) * 100);
    document.documentElement.style.setProperty('--zoom-in-x-adjust', xAdjust + '%');
    document.documentElement.style.setProperty('--zoom-in-y-adjust', yAdjust + '%');
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    window.addEventListener('click', transitionAnimationAdjustments);
    handleWindowSizeChange();

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
      window.removeEventListener('click', transitionAnimationAdjustments);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="*" element={<AnimatedRoute />} />
      </Routes>
    </Router>
  );
};

export default Sections;
