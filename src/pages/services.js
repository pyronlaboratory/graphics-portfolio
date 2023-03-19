import React, {useState, useEffect} from 'react';
import { motion } from "framer-motion";
import { gsap } from 'gsap';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const tl = gsap.timeline();

const servicesAnimation = (completeAnimation) => {
    tl.to(".services-overlay", { 
        duration: 1.6,
        yPercent: '100',
        ease: "expo.inOut",
        delay: 0.1
    })
    .to(".services-overlay", {
        css: {
            display: "none"
        },
        OnComplete: completeAnimation
    });
};

export default function Services() {

    const [animationComplete, setAnimationComplete] = useState(false);

    const completeAnimation = () => {
        setAnimationComplete(true)
    }

    useEffect(() => {
        servicesAnimation(completeAnimation);
    });

    return (
        <>

{
        animationComplete === false ? 
            <div className="services-overlay"></div>: ""
        }

        <div className="page">
            <div className="container">
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 1.2, ...transition },
                }}
                className="row">
                    <h1>We design new digital products that increase top-line revenue growth. Whether you’re just getting started or are an established brand, we're here to authorize your digital presence.</h1>
                </motion.div>
                
            </div>
            
        </div>

    
        </>
    )
}
