import React, {useState, useEffect} from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import { ReactComponent as UpArrow } from '../assets/up-arrow-circle.svg';

import gsap from 'gsap/gsap-core';

let tl = gsap.timeline();

const Header = ({history, dimensions}) => {

    const [menuState, setMenuState] = useState({menuOpened: false})

    useEffect(() => {

        history.listen(() => {
            setMenuState({ menuOpened: false })
        })

        if(menuState.menuOpened === true) {
            tl.to("body", {duration: 0.01, css: {overflow: "hidden"}})
            .to(".App", {
                duration: 1,
                y: dimensions.width <= 654 ? '100vh' : dimensions.height / 1.2,
                ease: "expo.inOut"
            }).to(".hamburger-menu span", {
                duration: 0.6,
                delay: -1,
                scaleX: 0,
                transformOrigin: "50% 0%",
                ease: "expo.inOut"
            }).to("#path_1", {
                duration: 0.4,
                delay: -0.6,
                css: {
                    strokeDasharray: 5,
                    strokeDashoffset: 10
                }
            }).to("#path_2", {
                duration: 0.4,
                delay: -0.6,
                css: {
                    strokeDasharray: 20,
                    strokeDashoffset: 10
                }
            }).to("#line_1", {
                duration: 0.4,
                delay: -0.6,
                css: {
                    strokeDasharray: 18,
                    strokeDashoffset: 40
                }
            }).to("#circle", {
                duration: 0.6,
                delay: -0.8,
                css: {
                    strokeDashoffset: 0
                }
            }).to(".hamburger-menu-close", {
                duration: 0.6,
                delay: -0.8,
                css: {
                    display: "block"
                }
            });
        } else {
            tl.to(".App", {
                duration: 1,
                y: 0,
                ease: "expo.inOut"
            }).to("#circle", {
                duration: 0.6,
                delay: -0.6,
                css: {
                    strokeDashoffset: -193,
                    strokeDasharray: 227
                }
            }).to("#path_1", {
                duration: 0.4,
                delay: -.6,
                css: {
                    strokeDashoffset: 10,
                    strokeDasharray: 10
                }
            }).to("#path_2", {
                duration: 0.4,
                delay: -.6,
                css: {
                    strokeDashoffset: 10,
                    strokeDasharray: 10
                }
            }).to("#line_1", {
                duration: 0.4,
                delay: -.6,
                css: {
                    strokeDashoffset: 40,
                    strokeDasharray: 40
                }
            }).to(".hamburger-menu span", {
                duration: 0.6,
                delay: -.6,
                scaleX: 1,
                transformOrigin: "50% 0%",
                ease: "expo.inOut"
            }).to(".hamburger-menu-close", {
                duration: 0,
                delay: -.1,
                css: {
                    display: "none"
                }
            }).to("body", {
                duration: 0,
                css: {
                    overflow: "auto"
                }
            });
        }
    });

    return (
        <div className="header">
            <div className="container">
                <div className="row v-center space-between">
                    <div className="logo">
                        <NavLink to="/">RONIT.</NavLink>MISHRA
                    </div>
                    <div className="nav-toggle">
                        <div onClick={() => setMenuState({menuOpened: true})} className="hamburger-menu">
                            <span></span>
                            <span></span>
                        </div>
                        <div  onClick={() => setMenuState({menuOpened: false})} className="hamburger-menu-close">
                            <UpArrow />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Header);