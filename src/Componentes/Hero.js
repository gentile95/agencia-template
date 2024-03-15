import React from 'react'
import './Hero.css'

const Hero = (props) => {
  return (
    <div className="container-hero">
      <section className="container-video">
        <video src={props.videoHero} autoPlay loop muted className={props.className}/>
      </section>
      <section className="hero-text">
        <h1 className='elemento-texto'>{props.title}</h1>
        <p className='elemento-texto'>{props.txt}</p>
      </section>
    </div>
  )
}

export default Hero