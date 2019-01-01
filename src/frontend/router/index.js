import React, { Fragment } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { spring,AnimatedSwitch } from "react-router-transition";
import Header from "./header";
import { RouteList } from "./list";

export default () => (
    <Router>
    <Fragment>
      <Header />
      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="switch-wrapper"
      >
        {RouteList.map((i, k) => (
          <ParserRoute {...i} key={k} />
        ))}
      </AnimatedSwitch>
    </Fragment>
  </Router>
 );
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8)
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1)
  }
};

const ParserRoute = ({ exact, path, Component }) => (
  <Route
    exact={exact != undefined && exact}
    path={path}
    component={Component}
  />
);
