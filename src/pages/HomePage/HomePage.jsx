import './HomePage.css'
import NavBar from '../../components/NavBar/NavBar'
import Hero from '../../components/Hero/Hero'

const HomePage = () => {
  return (
    <div className="generalHomePage">
      <div className="welcom-box">
        <NavBar />
        <Hero />
      </div>
    </div>
  )
}

export default HomePage
