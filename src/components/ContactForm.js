import { useState } from 'react'

const ContactForm = () => {
    const [firstName, setFirstName] = useState('')
    const [firstNameError, setFirstNameError] = useState(false)
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [message, setMessage] = useState('')
    const [messageError, setMessageError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'firstName':
                setFirstName(e.target.value)
                setFirstNameError(validateLength(e.target.value))
                break
            case 'email':
                setEmail(e.target.value)
                setEmailError(validateLength(e.target.value, 3))
                break
            case 'message':
                setMessage(e.target.value)
                setMessageError(validateLength(e.target.value, 2))
                break
        }
    }

    const validateLength = (value, minLength = 2) => {
        if (value.length < minLength)
            return true
        return false
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMessage('')

        for(let element of e.target) {
            switch (element.name) {
                case 'firstName':
                    setFirstName(element.value)
                    setFirstNameError(validateLength(element.value))
                    break
                case 'email':
                    setEmail(element.value)
                    setEmailError(validateLength(element.value, 3))
                    break
                case 'message':
                    setMessage(element.value)
                    setMessageError(validateLength(element.value, 2))
                    break
            }
        }
            
        if (!firstNameError && !emailError && !messageError) {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    firstName, email, message
                })
            })

            if (result.status === 201)
                alert('formuläret har skickats')
            else 
                setErrorMessage('Något gick fel')
        }
    }

    

  return (
    <section className="contact-form">
        <div className="container">
            <h2 className="content-center">Leave us a message<br/> for any information</h2>
            <p className='errormessage'>{errorMessage}</p>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <input type="text" placeholder="Name*" name="firstName" value={firstName} onChange={(e) => handleChange(e)} />
                    <p className={`${firstNameError ? 'messageerror': ''}`}>{` ${firstNameError ? ' Ditt namn måste anges': ''}`}</p>

                    <input type="email" placeholder="Email*" name="email" value={email} onChange={(e) => handleChange(e)} />
                    <p className={`${emailError ? 'messageerror': ''}`}>{` ${emailError ? ' Måste ange en giltlig e-post': ''}`}</p>
                    
                    <input type="text" className="message-box" placeholder="Your Message*" name="message" value={message} onChange={(e) => handleChange(e)} />
                    <p className={`${messageError ? 'messageerror': ''}`}>{` ${messageError ? ' Meddelandet måste innehålla mer än 2 tecken': ''}`}</p>
                </div>
                <div className="content-center2"> 
                <button type="submit" className="theme-knapp" href="service.html">Send Message<i className="fa-regular fa-arrow-up-right"></i></button>      
            </div> 
            </form>
            
        </div>
        <iframe width="100%" height="620" src="https://maps.google.com/maps?width=1920&amp;height=620&amp;hl=en&amp;q=Sveav%C3%A4gen%2031%20%20111%2034%20STOCKHOLM+(crito)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </section>
  )
}

export default ContactForm