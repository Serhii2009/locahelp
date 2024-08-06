import { useState } from 'react'
// import { assets } from '../../assets/assets.js'
import './Modal.css'

const Modal = () => {
  const [modal, setModal] = useState(false)

  const toogleModal = () => {
    setModal(!modal)
  }

  return (
    <div>
      <button onClick={toogleModal}>Heello</button>

      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-component">
            <h2>Hi! Im Serhii</h2>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal
