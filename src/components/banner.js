import React from 'react'
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg'
export default function Banner() {
    return (
        <section className="main">
            <div className="container">
                <div className="row">
                    <h2>
                        <div className="line">
                            <span>Creating interactive</span>
                        </div>
                        <div className="line">
                            <span>and immersive experiences.</span>
                        </div>
                    </h2>
                    <div className="btn-row">
                        <a href="/">Read more <RightArrow /></a>
                    </div>
                </div>
            </div>
       </section>
            
    )
}
