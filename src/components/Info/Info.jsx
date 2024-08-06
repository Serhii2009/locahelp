import './Info.css'

const Info = () => {
  return (
    <div className="about-us-content">
      <div className="about-us-main-text">
        <p>
          Welcome to <span>Locahelp</span>, your trusted partner in making
          global relocations seamless and stress-free. Founded by Serhii
          Kravchenko, a seasoned full stack developer from Ukraine, our company
          is dedicated to assisting individuals and families in their move to
          various countries around the world, with a special focus on Europe.
        </p>
      </div>

      <div className="about-us-benefits">
        <h2>Who We Are?</h2>
        <p>
          At <span>Locahelp</span>, we understand that relocating to a new
          country can be both exciting and challenging. Our team of experienced
          professionals is here to provide comprehensive support throughout
          every stage of your journey. Whether you’re moving for work, study, or
          a fresh start, we offer personalized services tailored to meet your
          unique needs.
        </p>
        <h2 className="display-none-class">What We Offer?</h2>
        <ul className="about-us-list">
          <li>Comprehensive Consultation</li>
          <li>Visa and Immigration Assistance</li>
          <li>Accommodation Search</li>
          <li>Cultural Integration</li>
          <li>Logistics and Transportation</li>
        </ul>
        <h2 className="display-none-class">Why Choose Us?</h2>
        <ul className="about-us-list">
          <li>Expertise</li>
          <li>Personalized Service</li>
          <li>Trust and Reliability</li>
          <li>Global Network</li>
        </ul>
      </div>
    </div>
  )
}

export default Info
