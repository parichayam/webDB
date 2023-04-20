import React from 'react'
import styles from '@/styles/Feature.module.css'
import { FormattedMessage } from 'react-intl'

export default function Features() {
    return (
        <div>
            <section className={styles.group}>
                <div className={styles.group_item}>
                    <a href=""><img src="https://cdn-icons-png.flaticon.com/512/858/858962.png" alt="" width={'20px'} height={'20px'}></img></a>
                    <h4><FormattedMessage id="feature.title1" /></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className={styles.group_item}>
                    <a href=""><img src="https://cdn-icons-png.flaticon.com/512/858/858962.png" alt="" width={'20px'} height={'20px'}></img></a>
                    <h4><FormattedMessage id="feature.title2" /></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className={styles.group_item}>
                    <a href=""><img src="https://cdn-icons-png.flaticon.com/512/858/858962.png" alt="" width={'20px'} height={'20px'}></img></a>
                    <h4><FormattedMessage id="feature.title3" /></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </section>

        </div>
    )
}
