import React, {useState, useEffect} from 'react';
import { motion } from "framer-motion";
import gsap from 'gsap/gsap-core';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const tl = gsap.timeline();

const ouecoAnimation = (completeAnimation) => {
    tl.to(".oueco-overlay", { 
        duration: 1.2,
        xPercent: '100',
        ease: "expo.inOut",
        delay: 0.1
    })
    .to(".oueco-overlay", {
        css: {
            display: "none"
        },
        OnComplete: completeAnimation
    });
};

const title = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
};

const letter = {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
      transition: { duration: 1, ...transition },
    },
};

const Oueco = () => {

    const [animationComplete, setAnimationComplete] = useState(false);

    const completeAnimation = () => {
        setAnimationComplete(true)
    }

    useEffect(() => {
        ouecoAnimation(completeAnimation);
    });

    return (
        <>
        {
        animationComplete === false ? 
        <div className="oueco-overlay"></div>: ""
        }

        <motion.div initial='initial' animate='animate' exit='exit' className="page">
            <div className="container">
                <div className='row center top-row'>
                    <div className='top'>
                        <motion.div 
                             initial={{ opacity: 0, y: 20 }}
                             animate={{
                               opacity: 1,
                               y: 0,
                               transition: { delay: 1.2, ...transition },
                             }}
                            className='details'>
                            <div className='location'>
                                <span>28.538336</span>
                                <span>-81.379234</span>
                            </div>
                            <div className='mua'>MUA: @mylifeascrystall</div>
                        </motion.div>
                        <motion.div className='model'>
                        <motion.span className='title' variants={title}>
                            <motion.span variants={letter}>O</motion.span>
                            <motion.span variants={letter}>u</motion.span>
                            <motion.span variants={letter}>e</motion.span>
                            <motion.span variants={letter}>c</motion.span>
                            <motion.span variants={letter}>o</motion.span>
                        </motion.span>
                        
                        </motion.div>
                    </div>
                </div>
                
                <div className='row bottom-row'>
                    <div className='bottom'>
                        <div className='image-container-single'>
                        <motion.div  
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 1.2, ...transition },
                            }}
                            className='thumbnail-single'>
                            <div className='frame-single'>
                            <img src={require("../../assets/photo3.webp").default} alt='cover' />
                            </div>
                        </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        
        <div className="page">
        
            <div className='detailed-information'>
                <div className='container'>
                <div className='row'>
                    <h2 className='title'>
                    The insiration behind the artwork & <br /> what it means.
                    </h2>
                    <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literature from 45 BC,
                    making it over 2000 years old. Richard McClintock, a Latin
                    professor at Hampden-Sydney College in Virginia, looked up one of
                    the more obscure Latin words, consectetur, from a Lorem Ipsum
                    passage, and going through the cites of the word in classical
                    literature, discovered the undoubtable source. Lorem Ipsum comes
                    from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                    Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
                    BC. This book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum, "Lorem
                    ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                </div>
                
                </div>
            
        </div>
        </div>

        <motion.div initial='initial' animate='animate' exit='exit' className="page" style={{marginTop: "-15rem"}}>
            <div className="container">                
                <div className='row bottom-row'>
                    <div className='bottom'>
                        <div className='image-container-single'>
                        <motion.div  
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 1.2, ...transition },
                            }}
                            className='thumbnail-single'>
                            <div className='frame-single'>
                            <img src={require("../../assets/photo6.webp").default} alt='cover' />
                            </div>
                        </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    
        </>
    )
}


export default Oueco;