import React, { useEffect, useState, useRef } from "react";
import {Route, Switch} from "react-router-dom";
import "./styles/App.scss";

import gsap from "gsap/gsap-core";
import { AnimatePresence } from "framer-motion";

import useWindowSize from "./hooks/useWindowSize";

//components
import Header from "./components/header";
import Navigation from "./components/navigation";

//pages
import Home from "./pages/home";
import Approach from "./pages/approach";
import Services from "./pages/services";
import About from "./pages/about";

import Oueco from "./pages/case-studies/oueco";
import Ollie from "./pages/case-studies/ollie";

const App = () => {

  // Hooks
  const dimensions = useWindowSize();

  // References
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const skewConfigs = {
    ease: .1,
    current: 0,
    previous: 0,
    rounded: 0
  }

  useEffect(() => {
    document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`;
  }, [dimensions.height]);

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  });

  const skewScrolling = () => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

    // variables
    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / dimensions.width
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    scrollContainer.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)`;
    
    requestAnimationFrame(() => skewScrolling());
  };
  
  gsap.to("body", { 
    duration: 0, 
    css: {visibility: "visible"}
  });

  return (
    <div>
      <Header dimensions={dimensions} />
      <div ref={app} className="App">
      
      <div ref={scrollContainer} className="scroll-container">
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route
                  exact
                  path='/'
                  render={() => <Home />}
                />
                <Route
                  exact
                  path='/profile'
                  render={() => <About />}
                />
                <Route
                  exact
                  path='/services'
                  render={() => <Services />}
                />
                <Route
                  exact
                  path='/approach'
                  render={() => <Approach />}
                />
                <Route
                  exact
                  path='/case-studies/oueco'
                  render={() => <Oueco />}
                />
                <Route
                  exact
                  path='/case-studies/ollie'
                  render={() => <Ollie />}
                />
                
              </Switch>
            </AnimatePresence>
          )}
        />
      </div>
        
      </div>
      <Navigation />
    </div>
  );
}

export default App;