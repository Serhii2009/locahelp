import './TypeItaly.css'
import { ItalyFAQs } from '../../../data'

const TypeItaly = () => {
  return (
    <div className="type-italy">
      {ItalyFAQs.Italy.map((item, index) => (
        <div className="blocks-italy" key={index}>
          <div className="item-italy">
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TypeItaly
