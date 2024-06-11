import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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

export default class AnimatedRoute extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.location.pathname !== state.pathname) {
      let transitionClassName = 'slide-left';
      if (state.pathname === '/menu') {
        transitionClassName = 'zoom-in';
      } else if (props.location.pathname === '/menu') {
        transitionClassName = 'zoom-out';
      } else if (props.location.pathname === getPrevPath(state.pathname)) {
        transitionClassName = 'slide-right';
      }

      return {
        transitionClassName,
        pathname: props.location.pathname,
      };
    }

    return null;
  }

  constructor (props) {
    super(props);
    this.state = {
      transitionClassName: 'slide-left',
      pathname: props.location.pathname,
    };
    this.transitionSpeed = 1200;
    document.documentElement.style.setProperty('--transition-speed', this.transitionSpeed + 'ms');
  }


  render() {
    const { location } = this.props;
    const { transitionClassName } = this.state;

    return (
      <TransitionGroup className={transitionClassName}>
        <CSSTransition
          timeout={this.transitionSpeed}
          classNames="page"
          key={location.key}
        >
          <Switch location={location}>
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/" component={Patients} />
            <Route exact path="/purpose" component={Purpose} />
            <Route exact path="/analysis" component={Analysis} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/strengths" component={Strengths} />
            <Route exact path="/benefits" component={Benefits} />
            <Route exact path="/values" component={Values} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/faq" component={Faq} />
            <Redirect to="/" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}
