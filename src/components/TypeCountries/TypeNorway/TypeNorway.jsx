import './TypeNorway.css'
import { NorwayFAQs } from '../../../data'

const TypeNorway = () => {
  return (
    <div className="type-norway">
      {NorwayFAQs.Norway.map((item, index) => (
        <div className="blocks-norway" key={index}>
          <div className="item-norway">
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TypeNorway
