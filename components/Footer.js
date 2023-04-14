import React from 'react'
import styles from '@/styles/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FormattedMessage } from 'react-intl'
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Footer() {
    const { locales } = useRouter();

    return (
        <div className={styles.footer}>
            <div className={styles.footer_top}>
                <div className={styles.content}>
                    <h1><FormattedMessage id="footer.content.title"/></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique enim ut dui sagittis ultricies.</p>
                    <button type="submit"><FormattedMessage id="footer.button"/></button>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.footer_col}>
                        <h4>ventive</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique enim ut dui sagittis ultricies. Aenean ut felis et orci semper iaculis. Vivamus et mollis libero, feugiat elementum lectus. Donec.
                        </p>
                    </div>

                    <div className={styles.footer_col}>
                        <h4><FormattedMessage id="footer.col1.title"/></h4>
                        <ul>
                            <li><a href=""><FormattedMessage id="footer.col1.link1"/></a></li>
                            <li><a href=""><FormattedMessage id="footer.col1.link2"/></a></li>
                            <li><a href=""><FormattedMessage id="footer.col1.link3"/></a></li>
                            <li><a href=""><FormattedMessage id="footer.col1.link4"/></a></li>
                        </ul>
                    </div>

                    <div className={styles.footer_col}>
                        <h4><FormattedMessage id="footer.col2.title"/></h4>
                        <ul>
                            <li><a href=""><FormattedMessage id="footer.col2.link1"/></a></li>
                            <li><a href=""><FormattedMessage id="footer.col2.link2"/></a></li>
                            <li><a href=""><FormattedMessage id="footer.col2.link3"/></a></li>
                            <li><a href=""><FormattedMessage id="footer.col2.link4"/></a></li>
                        </ul>
                    </div>

                    <div className={styles.footer_col}>
                        <h4><FormattedMessage id="footer.col3.title"/></h4>
                        <ul>
                            <li><a href="#"><FontAwesomeIcon icon={faFacebook} className={styles.brand} />Facebook</a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} className={styles.brand} />Twitter</a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faInstagram} className={styles.brand} />Instragram</a></li>
                        </ul>
                        <div className={styles.languages}>
                            <p>Select language:</p>
                            {[...locales].sort().map((locale) => (
                                <Link key={locale} href="" locale={locale}>
                                    {locale}
                                </Link>
                            ))}
                            
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}
