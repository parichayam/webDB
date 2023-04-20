import React from 'react'
import styles from '@/styles/Feature.module.css'
import { FormattedMessage } from 'react-intl'

export default function Section() {
    return (
        <div>
            <section className={styles.text}>
                <div className={styles.info2}>
                    <h2><FormattedMessage id="section.title" /></h2>
                    <div className={styles.line}></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia vulputate orci eget suscipit. Nunc.
                    </p>
                </div>
            </section>

        </div>
    )
}
