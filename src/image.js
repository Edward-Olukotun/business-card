import React from 'react'
import Pic from './image/business card.jpg'

function image() {
  return (
    <div>
      <img src={Pic} alt='' className='pic'/>
     </div>
  )
}

export default image