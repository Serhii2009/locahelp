import './Hero.css'
import { assets } from '../../assets/assets.js'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-title">
        <h1>Your Relocation Assistant</h1>
        <div className="hero-button">Try it out</div>
      </div>

      <img src={assets.moon} alt="" />
    </div>
  )
}

export default Hero
