import './TypeSpain.css'
import { SpainFAQs } from '../../../data'

const TypeSpain = () => {
  return (
    <div className="type-spain">
      {SpainFAQs.Spain.map((item, index) => (
        <div className="blocks-spain" key={index}>
          <div className="item-spain">
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TypeSpain
