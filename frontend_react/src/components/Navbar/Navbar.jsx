import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import './Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  
  return (

    // Navigation
    <nav className='app__navbar'>

      {/* Logo */}
      <div className='app__navbar-logo'>
        <img src={images.lc_blue} alt="logo" />
      </div>

      {/* for desktop menu */}
      {/* Unordered list  */}
      <ul className='app__navbar-links'>

        {/* Array of items for the navbar */}
        {['home', 'work', 'skills', 'contact'].map((item) => (

          // Create each list item as an anchor
          <li className='app__flex p-text' key={`link=${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}

      </ul>

      {/* for mobile menu */}
      {/* add the navbar menu toggle button function */}
      <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)}/>

          {toggle && (

            // call framer motion
            <motion.div
              whileInView={{ x: [300,0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >

              <HiX onClick={() => setToggle(false)} />

              {/* Unordered list  */}
              <ul>

                {/* Array of items for the navbar */}
                {['home', 'work', 'skills', 'contact'].map((item) => (

                // Create each list item as an anchor
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)} >{item}</a>
                  </li>
                ))}

              </ul>

            </motion.div>
          )}

      </div>

    </nav>
  )
}

export default Navbar