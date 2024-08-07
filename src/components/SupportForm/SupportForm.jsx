import './SupportForm.css'
import { toast } from 'react-toastify'

const SupportForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    formData.append('access_key', '6744e5c5-7336-47ee-80c4-8c5b6b27ecd5')

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json())

    if (res.success) {
      toast.success(res.message)
    } else {
      toast.error('There was an error submitting the form.')
    }
  }

  return (
    <div className="support-form">
      <form onSubmit={onSubmit} className="contact-right">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder="Enter your name" name="name" />

        <label htmlFor="">Your Email</label>
        <input type="email" placeholder="Enter your email" name="email" />

        <label htmlFor="">Write your message here</label>
        <textarea
          name="message"
          rows="8"
          placeholder="Enter your message"
        ></textarea>
        <button type="submit" className="contact-submit">
          Submit now
        </button>
      </form>
    </div>
  )
}

export default SupportForm
