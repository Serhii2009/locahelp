import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AboutUs from './pages/AboutUs/AboutUs'
import OurMission from './pages/OurMission/OurMission'
import BestOpportunities from './pages/BestOpportunities/BestOpportunities'
import Support from './pages/Support/Support'
import RelaxingGame from './pages/RelaxingGame/RelaxingGame'
import CountryChoise from './pages/CountryChoise/CountryChoise'

import Canada from './pages/CountriesInfo/Canada/Canada'
import Uk from './pages/CountriesInfo/Uk/Uk'
import Germany from './pages/CountriesInfo/Germany/Germany'
import Poland from './pages/CountriesInfo/Poland/Poland'
import Italy from './pages/CountriesInfo/Italy/Italy'
import Spain from './pages/CountriesInfo/Spain/Spain'
import Norway from './pages/CountriesInfo/Norway/Norway'
import Usa from './pages/CountriesInfo/Usa/Usa'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country-choise" element={<CountryChoise />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="//best-opportunities" element={<BestOpportunities />} />
          <Route path="/support" element={<Support />} />
          <Route path="/relaxing-game" element={<RelaxingGame />} />

          <Route path="/country-choise/canada" element={<Canada />} />
          <Route path="/country-choise/uk" element={<Uk />} />
          <Route path="/country-choise/germany" element={<Germany />} />
          <Route path="/country-choise/poland" element={<Poland />} />
          <Route path="/country-choise/italy" element={<Italy />} />
          <Route path="/country-choise/spain" element={<Spain />} />
          <Route path="/country-choise/norway" element={<Norway />} />
          <Route path="/country-choise/usa" element={<Usa />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
