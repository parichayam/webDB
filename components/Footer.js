import React from 'react'
import styles from '@/styles/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from 'react-intl'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { faSmile } from '@fortawesome/free-regular-svg-icons';

export default function Footer() {
  //  const { locales } = useRouter();
  let router = useRouter();

    return (
        <>
            <div className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.footer_col}>
                            <h4>
                                <FontAwesomeIcon icon={faSmile} />
                                apolo
                            </h4>
                        </div>

                        <div className={styles.footer_col}>
                            <h4><FormattedMessage id="footer.col1.title" /></h4>
                            <ul>
                                <li><a href=""><FormattedMessage id="footer.col1.link1" /></a></li>
                                <li><a href=""><FormattedMessage id="footer.col1.link2" /></a></li>
                            </ul>
                        </div>

                        <div className={styles.footer_col}>
                            <h4><FormattedMessage id="footer.col2.title" /></h4>
                            <ul>
                                <li><a href=""><FormattedMessage id="footer.col2.link1" /></a></li>
                                <li><a href=""><FormattedMessage id="footer.col2.link2" /></a></li>
                                <li><a href=""><FormattedMessage id="footer.col2.link3" /></a></li>
                            </ul>
                        </div>

                        <div className={styles.footer_col}>
                            <h4><FormattedMessage id="footer.col3.title" /></h4>
                            <ul>
                                <li><a href=""><FormattedMessage id="footer.col3.link1" /></a></li>
                                <li><a href=""><FormattedMessage id="footer.col3.link2" /></a></li>
                                <li><a href=""><FormattedMessage id="footer.col3.link3" /></a></li>
                                <li><a href=""><FormattedMessage id="footer.col3.link4" /></a></li>
                            </ul>
                        </div>

                        <div className={styles.footer_col}>
                            <ul>
                                <li><a href="#"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png" width={'30px'} height={'30px'}></img></a></li>
                            </ul>

                            <div className={styles.languages}>
                                <p>Select language:</p>
                                {router.locales.map((locale) => (
                                    <Link key={locale} href={router.asPath} locale={locale}>
                                        {locale}
                                    </Link>
                                ))}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer_bottom}>
                <p>Copyright 2023. All rights reserved</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

        </>
    )
}
