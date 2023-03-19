import React from 'react';
import { Link } from 'react-router-dom';

import { motion } from "framer-motion";

import { ReactComponent as CasesNext } from '../assets/arrow-right.svg';
import { ReactComponent as CasesPrev } from '../assets/arrow-left.svg';

const caseStudies = [
    {
        id: 3, 
        path: 'ollie',
        subtitle: 'Ollie', 
        title: "Brooklyn's finest bespoke interiors.",
        img: "photo3"
    },
    {
        id: 2, 
        path: 'xylar',
        subtitle: 'Xylar', 
        title: "Feel the Vibe. Feel Music.",
        img: "photo97"
    },
    
    {
        id: 1, 
        path: 'oueco',
        subtitle: 'Oueco', 
        title: "Be Natural. Be Beautiful. Be You.",
        img: "photo1"
    }
]

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export default function Cases() {
    return (
        <section className="cases">
            <div className="container-fluid">
                <div className="cases-navigation">
                    <div className="cases-arrow prev disabled">
                        <CasesPrev />
                    </div>
                    <div className="cases-arrow next">
                        <CasesNext />
                    </div>
                </div>
                <div className="row">
                
                    {caseStudies.map((caseItem) => (
                        <Link to={`case-studies/${caseItem.path}`} imageDimensions={{height: '320px', width: '320px'}}>
                        <div className="case" key={caseItem.id}>
                            
                            <motion.div layoutId={caseItem.id} exit={{opacity: 0}} transition={transition} className="case-details">
                                <span>{caseItem.subtitle}</span>
                                <h2>{caseItem.title}</h2>
                            </motion.div>
                            
                            <div className="case-image">  
                                <img 
                                    src={require(`../assets/${caseItem.img}.webp`).default} 
                                    alt={caseItem.title} 
                                />
                            </div>
                        </div>
                        </Link>
                    ))}

                </div>
            </div>
        </section>
    )
}
