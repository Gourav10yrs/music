import React from "react";
import { useSpring, animated } from 'react-spring'
import './App.css';
import {World, O3D }from './components/Background';



const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

function App() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))  
  const [theme, setTheme] = React.useState("dark");
  return (
    <div className="hero">
      <div>
        <div className="menu">
          <div className="menu__contents">
          <img class="menu__logo" src="https://vice.qantumthemes.xyz/dhrk/wp-content/uploads/2020/05/dhrk-logo-small.png" alt="Home" />
            <ul className="menu__box">
              <li className="menu__item"><a className="menu__link menu__link-active" href="/">Home</a></li>
              <li className="menu__item"><a className="menu__link" href="/">Events</a></li>
              <li className="menu__item"><a className="menu__link" href="/">Podcast</a></li>
              <li className="menu__item"><a className="menu__link" href="/">Artists</a></li>
              <li className="menu__item"><a className="menu__link" href="/">Music</a></li>
              <li className="menu__item"><a className="menu__link" href="/">Blog</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="all_sections">
        <section className="heroone">
          <World />
          <div className="heroone__box" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <animated.div className="heroone__container" style={{ transform: props.xy.interpolate(trans1) }}>
              <h3 class="heroone__title">WELCOME TO</h3>
              <div>
              <O3D theme={theme} />
                
                <h2 class="heroone__heading vice-textfx-glitch vice-fx-on" data-vice-textfx="glitch">
                  <span class="vice-textfx-glitch__l0">DHRK VICE</span>
                  <span class="vice-textfx-glitch__l1">DHRK VICE</span>
                  <span class="vice-textfx-glitch__l2">DHRK VICE</span>
                </h2>
                <h3 className="heroone__subheading vice-textfx-glitch vice-fx-on">
                  <span class="vice-textfx-glitch__l0">CONGRATULATIONS, YOU ARE LOST</span>
                  <span class="vice-textfx-glitch__l1">CONGRATULATIONS, YOU ARE LOST</span>
                  <span class="vice-textfx-glitch__l2">CONGRATULATIONS, YOU ARE LOST</span>
                 
                </h3>
                <div className="heroone__buttonbox">
                  <a className="heroone__button" href="/">LISTEN NOW</a>
                </div>
              </div>
            </animated.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
