import React from 'react'
import styles from '@/styles/Home.module.css'
import { FormattedMessage } from 'react-intl'

export default function HomePage() {
    return (
            <div>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <div className={styles.info}>
                            <h1><FormattedMessage id="home.header" /></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero dolor, viverra id arcu vel, ullamcorper hendrerit justo. Donec tristique sem nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <img src="https://www.citypng.com/public/uploads/small/11639742304fqp5upggd2cke76potjqc5jqctz0p7owqgwzyh1kua0pst1w4oyyrnrzqnzjscwbdvcmgefmcd7ujhczx0cjugnqgllnx8zktb2k.png" width={'150px'} height={'50px'}></img>
                            <img src="https://www.citypng.com/public/uploads/preview/free-available-on-the-app-store-apple-button-png-11639742555i7lifwrl0p.png" width={'150px'} height={'50px'} className={styles.apple}></img>
                            <p><FormattedMessage id="home.text" /></p>
                        </div>
                        <div className={styles.phone}>
                            <img src="https://purepng.com/public/uploads/large/purepng.com-apple-iphone-xappleapple-iphonephonesmartphonemobile-devicetouch-screeniphone-xiphone-10electronicsobjects-251530689596wod8s.png" alt=""></img>
                        </div>
                    </div>
                </section>
                <div className={styles.wave}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shape_fill}></path>
                    </svg>
                </div>
            </div>
    )
}
