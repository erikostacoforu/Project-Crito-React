import React from 'react'


import Header from '../components/Header'
import ShowcaseContacts from '../components/ShowcaseContacts'
import ContactMarketing from '../components/ContactMarketing'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'


const Contacts = () => {
  return (
    <>
      <header>
          <Header />
      </header>  
          <main>
            <ShowcaseContacts />
            <ContactMarketing />
            <ContactForm />
          </main>
          <footer>
            <Footer />
          </footer>
    </>

  )
}

export default Contacts