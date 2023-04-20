import React from 'react'
import styles from '@/styles/Signup.module.css'
import { FormattedMessage } from 'react-intl'

export default function Signup() {
    return (
        <div>
            <section className={styles.sign_up}>
                <div className={styles.info}>
                    <h2><FormattedMessage id="signup.title" /></h2>
                    <p><FormattedMessage id="signup.text1" />
                    </p>
                    <form className={styles.form}>
                        <input type="text" placeholder="Your Email"></input>
                        <button type="submit"><FormattedMessage id="signup.button" /></button>
                    </form>
                    <p><FormattedMessage id="signup.text2" /></p>
                </div>
            </section>
        </div>
    )
}
