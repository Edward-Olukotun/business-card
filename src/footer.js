import React from 'react'
import Tw from './image/twitter logo.png'
import Fb from './image/facebook logo.png'
import Ig from './image/gram logo.png'
import Gh from './image/git logo.png'
function footer() {
  return (
    <div className='footer'>
    <div className='Twitter'><img src={Tw} alt=''/></div>
    <div className='Facebook'><img src={Fb} alt=''/></div>  
    <div className='Instagram'><img src={Ig} alt=''/></div>
    <div className='Github'><img src={Gh} alt=''/></div>
    </div>
  )
}

export default footer