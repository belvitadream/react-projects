import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payment infrastructure for the internet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
            repellendus saepe obcaecati assumenda sit! Ipsam ipsum omnis
            veritatis placeat. Praesentium ut vel pariatur deserunt facilis non
            modi dignissimos fugiat iure?
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt='phone' className='phone-img' />
        </article>
      </div>
    </section>
  )
}

export default Hero
