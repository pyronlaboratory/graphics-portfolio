import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav>
           <div className="container">
               <div className="nav-columns">
                    <div className="nav-column">
                        <div className="nav-label">Menu</div>
                        <ul className="nav-links">
                            <li>
                                <NavLink to="/" exact>
                                    Case Studies
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/approach" exact>
                                    Approach
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/services" exact>
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile" exact>
                                    Profile
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-column">
                        <div className="nav-label">Contact</div>
                        <div className="nav-infos">
                            <ul className="nav-info">
                                <li className="nav-info-label">Email</li>
                                <li>
                                    <NavLink to="/contact" exact>
                                        Get in touch with me
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/audit" exact>
                                        Get a free audit
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Headquarters</li>
                                <li>WCJ8 203, Cottingham Road</li>
                                <li>Hull - HU6 7EL</li>
                                <li>UK</li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Phone</li>
                                <li>(+44) 78670 23069</li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Legal</li>
                                <li>Privacy and Cookies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        </nav>
    )
}
