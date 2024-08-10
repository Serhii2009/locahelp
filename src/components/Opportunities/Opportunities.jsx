import './Opportunities.css'
import { OpportunitiesFAQs } from '../../data'

const Opportunities = () => {
  return (
    <div className="type-opportunities">
      {OpportunitiesFAQs.map((item, index) => (
        <div className="blocks-opportunities" key={index}>
          <div className="item-opportunities">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Opportunities
