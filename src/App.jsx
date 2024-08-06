import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AboutUs from './pages/AboutUs/AboutUs'
import OurMission from './pages/OurMission/OurMission'
import BestOpportunities from './pages/BestOpportunities/BestOpportunities'
import Support from './pages/Support/Support'
import RelaxingGame from './pages/RelaxingGame/RelaxingGame'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="//best-opportunities" element={<BestOpportunities />} />
          <Route path="/support" element={<Support />} />
          <Route path="/relaxing-game" element={<RelaxingGame />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
