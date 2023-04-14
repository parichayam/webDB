import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import styles from '@/styles/Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope, faPrint } from '@fortawesome/free-solid-svg-icons'
import { db } from "../firebase/firebase"
import { collection, addDoc } from "firebase/firestore"
import { FormattedMessage } from 'react-intl';

export default function Contact() {

  const [ user, setUser ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ message, setMessage ] = useState("");

  const addMessage = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "contact"), {
        username: user,
        email: email,
        message: message
      })
      prompt("Message sent succesfully with id: ",docRef.id)
    } catch (e) {
      console.error("error adding document: ",e)
    }
  }

  return (
    <div className="background">
      <Navbar />
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.contact_info}>
            <div>
              <h2><FormattedMessage id="contact.title"/></h2>
              <ul className={styles.info}>
                <li>
                  <span><FontAwesomeIcon icon={faLocationDot} /></span>
                  <span>32, Avenue Newyork<br />321994 Newyork</span>
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faEnvelope} /></span>
                  <span>hello@gmail.com</span>
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faPhone} /></span>
                  <span>+3356 1589 2105</span>
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faPrint} /></span>
                  <span>+3356 1589 2100</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.contact_form}>
            <h2><FormattedMessage id="contact.title.right"/></h2>
            <div className={styles.form_box}>
              <div className={styles.input_box}>
                <input 
                type="text" 
                onChange={(e) => setUser(e.target.value)}
                placeholder='Your Name' 
                width={400}/>
              </div>
              <div className={styles.input_box}>
                <input 
                type="text" 
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Your Email' 
                width={400}/>
              </div>
              <div className={styles.input_box}>
                <textarea 
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Typing your message here...'></textarea>
              </div>
              <div className={styles.input_box}>
                <button 
                type="submit"
                onClick={addMessage}><FormattedMessage id="send"/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
