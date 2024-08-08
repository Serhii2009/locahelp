import './TypeUsa.css'
import { USAFAQs } from '../../../data'

const TypeUsa = () => {
  return (
    <div className="type-usa">
      {USAFAQs.USA.map((item, index) => (
        <div className="blocks-usa" key={index}>
          <div className="item-usa">
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TypeUsa
