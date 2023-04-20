import React, { useState } from 'react'
import styles from '@/styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';
import { faSmile } from '@fortawesome/free-regular-svg-icons';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMolbileMenu = () => setClick(false);

  return (
    <div>
        <div className={styles.navbar}> 
            <div className={styles.logo}>
                <h3>
                    <a><FontAwesomeIcon icon={faSmile}/></a>
                    apolo
                </h3>
            </div>
                <div className={styles.navbarMenu}> 
                <ul className={click ? "navbar-menu active" : "navbar-menu"}>
                    <li onClick={closeMolbileMenu}><a href="/"><FormattedMessage id="home"/></a></li>
                    <li onClick={closeMolbileMenu}><a href="/services"><FormattedMessage id="service"/></a></li>
                    <li onClick={closeMolbileMenu}><a href="/news"><FormattedMessage id="news"/></a></li>
                    <li onClick={closeMolbileMenu}><a href="/about"><FormattedMessage id="about"/></a></li>
                    <li><a href='/contact'><button type="submit"><FormattedMessage id="contact"/></button></a></li> 
                </ul>
                <div className="mobile-menu" onClick={handleClick}>
                    {click? (
                        <FontAwesomeIcon icon={faXmark} className="btn"/>
                    ) : (
                        <FontAwesomeIcon icon={faBars} className="btn"/>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}
