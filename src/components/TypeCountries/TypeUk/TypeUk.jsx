import './TypeUk.css'
import { UKFAQs } from '../../../data'

const TypeUk = () => {
  return (
    <div className="type-uk">
      {UKFAQs.UK.map((item, index) => (
        <div className="blocks-uk" key={index}>
          <div className="item-uk">
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TypeUk
