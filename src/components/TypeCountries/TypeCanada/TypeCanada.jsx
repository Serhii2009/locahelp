import './TypeCanada.css'
import { CanadaFAQs } from '../../../data'

const TypeCanada = () => {
  return (
    <div className="type-canada">
      {CanadaFAQs.Canada.map((item, index) => (
        <div className="blocks-canada" key={index}>
          <div className="item-canada">
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TypeCanada
