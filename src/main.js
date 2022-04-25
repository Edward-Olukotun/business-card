import React from 'react'
import Email from './image/message logo.png'
import Link from './image/linkedin logo.png'
function main() {
  return (
    <div className='main'>
      <h2 >Laura Smith</h2> 
      <h6 className='name'>Frontend Developer</h6>
      <h6 className='web'>laurasmith.website</h6>
      <button className='email'><img src={Email} alt='' />   Email</button>
      <button className='link'><img src={Link} alt='' />    LinkedIn</button>
      <h3>About</h3>
      <p className='text'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
      <h3>Interests</h3>
      <p className='text'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>

    </div>
  )
}

export default main