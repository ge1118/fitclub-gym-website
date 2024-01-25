import React, { useEffect, useRef, useState } from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const Hero = () => {

    const transition = { type: 'spring', duration: 3 }
    const [isMobile] = useState(window.innerWidth <= 768)
    const divRef = useRef(null);
    const [divWidth, setDivWidth] = useState(0);
    const initialLeft = isMobile ? `${divWidth - 93}px` : '238px'

    const updateDivWidth = () => {
        if (divRef.current) {
            setDivWidth(divRef.current.offsetWidth)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', updateDivWidth);
        updateDivWidth();
        console.log(divWidth)
        return () => {
            window.removeEventListener('resize', updateDivWidth);
        }
    }, [divWidth])

    return (
        <div>
            <div className="hero" id='home'>

                <div className="left-h">
                    <div className="blur hero-blur"></div>

                    <Header />

                    <div ref={divRef} className="the-best-ad">
                        <motion.div
                            key={divWidth}
                            initial={{ left: initialLeft }}
                            whileInView={{ left: '8px' }}
                            transition={{ ...transition, type: 'tween', yoyo: Infinity }}
                        ></motion.div>
                        <span>The best fitness club in the town</span>
                    </div>

                    <div className="hero-text">
                        <div>
                            <span className='stroke-text'>Shape </span>
                            <span>Your</span>
                        </div>
                        <div>
                            <span>Ideal body</span>
                        </div>

                        <div>
                            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                        </div>
                    </div>

                    <div className="figures">
                        <div>
                            <span>
                                <CountUp end={140} start={100} duration={4} prefix='+ ' />
                            </span>
                            <span>expert coaches</span>
                        </div>
                        <div>
                            <span>
                                <CountUp end={978} start={800} duration={4} prefix='+ ' />
                            </span>
                            <span>members joined</span>
                        </div>
                        <div>
                            <span>
                                <CountUp end={50} start={0} duration={4} prefix='+ ' />
                            </span>
                            <span>fitness programs</span>
                        </div>
                    </div>

                    <div className="hero-buttons">
                        <button className="btn">Get Started</button>
                        <button className="btn">Learn More</button>
                    </div>
                </div>

                <div className="right-h">
                    <button className='btn'>Join Now</button>

                    <motion.div className="heart-rate"
                        initial={{ right: '-1rem' }}
                        whileInView={{ right: '4rem' }}
                        transition={transition}>
                        <img src={Heart} alt="" />
                        <span>Heart Rate</span>
                        <span>116 bpm</span>
                    </motion.div>

                    <div className='hero-image-div'>
                        <motion.img
                            initial={{ right: '11rem' }}
                            whileInView={{ right: '20rem' }}
                            transition={transition}
                            src={hero_image_back} alt="" className="hero-image-back" />

                        <img src={hero_image} alt="" className="hero-image" />

                    </div>

                    <motion.div className="calories"
                        initial={{ right: '37rem' }}
                        whileInView={{ right: '28rem' }}
                        transition={transition}>
                        <img src={Calories} alt="" />
                        <div>
                            <span>Calories Burned</span>
                            <span>220 kcal</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default Hero
