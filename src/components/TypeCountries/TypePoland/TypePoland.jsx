import './TypePoland.css'
import { PolandFAQs } from '../../../data'

const TypePoland = () => {
  return (
    <div className="type-poland">
      {PolandFAQs.Poland.map((item, index) => (
        <div className="blocks-poland" key={index}>
          <div className="item-poland">
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TypePoland
