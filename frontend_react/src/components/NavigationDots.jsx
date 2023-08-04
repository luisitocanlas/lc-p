import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
        
        {/* Array of items for the navbar */}
        {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (

            // Create each list item as an anchor
            <a 
                href={`#${item}`}
                key = {item + index}
                className='app__navigation-dot'
                style={active === item ? { backgroundColor: '#313BAC' } : { }}
           />
            
        ))}

    </div>
  )
}

export default NavigationDots