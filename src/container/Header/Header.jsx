import React from 'react'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'
import { images } from '../../constants'
import './Header.scss'

const scaleVariants = {
  whileInView:{
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    
    <div className='app__header app__flex'>

      {/* For name and title/s */}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >

        <div className='app__header-badge'>

          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Lui</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Software Developer</p>
            <p className='p-text'>USAF Veteran</p>
          </div>

        </div>

      </motion.div>

      {/* For picture */}
      <motion.div 
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.lui_profile} alt="profile_bg" />
        {/* For circle background/overlay */}
        {/* <motion.img 
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        /> */}
      </motion.div>

      {/* For circle tech */}
      <motion.div 
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.java, images.javascript, images.react].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home')