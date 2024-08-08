import './TypeGermany.css'
import { GermanyFAQs } from '../../../data'

const TypeGermany = () => {
  return (
    <div className="type-germany">
      {GermanyFAQs.Germany.map((item, index) => (
        <div className="blocks-germany" key={index}>
          <div className="item-germany">
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TypeGermany
