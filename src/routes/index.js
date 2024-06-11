import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AnimatedRoute from './AnimatedRoute';
import { setIsMobile } from '../actions';

class Sections extends React.Component {
  handleWindowSizeChange = () => {
    const isMobile = (window.innerWidth < 768);
    this.props.setIsMobile(isMobile);

    let availableWidth = window.innerWidth - 100;
    let contentWidth = 820;
    let availableHeight = window.innerHeight - 100;
    let contentHeight = 820;
    let scale = Math.min( 
      availableWidth / contentWidth, 
      availableHeight / contentHeight 
    );
    document.documentElement.style.setProperty('--menu-scale', scale);
  };
  
  transitionAnimationAdjustments(e) {
    e.stopPropagation();
    let xAdjust = 50 - ((e.pageX / window.innerWidth) *100);
    let yAdjust = 50 - ((e.pageY / window.innerHeight) *100);
    document.documentElement.style.setProperty('--zoom-in-x-adjust', xAdjust + '%');
    document.documentElement.style.setProperty('--zoom-in-y-adjust', yAdjust + '%');
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    window.addEventListener('click', this.transitionAnimationAdjustments);
    this.handleWindowSizeChange();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
    window.removeEventListener('click', this.transitionAnimationAdjustments);
  }

  render() {
    return (
      <Router>
        <Route component={AnimatedRoute} />
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setIsMobile,
}, dispatch);

export default connect(null, mapDispatchToProps)(Sections);
