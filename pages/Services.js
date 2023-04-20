import React from 'react'
import Navbar from '../components/Navbar'
import styles from '@/styles/Service.module.css'
import Footer from '@/components/Footer'
import Image from 'next/image'
import padlock from '../public/padlock.png'
import cloud from '../public/cloud.png'
import system from '../public/database.png'
import { FormattedMessage } from 'react-intl'

const css = { width: '100%', height: 'auto', maxWidth: '100px' }
export default function Services() {
    return (
        <>
            <div className="background">
                <Navbar />
            </div>
            <div className={styles.section_bg}>
                <div className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.column}>
                            <div className={styles.card}>
                                <div className={styles.icon}>
                                    <Image src={padlock} style={css} alt="serviceImg" />
                                </div>
                                <h3><FormattedMessage id="service.title" /></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique enim ut dui sagittis ultricies.</p>
                                <button type="submit"><FormattedMessage id="more" /></button>
                            </div>
                        </div>

                        <div className={styles.column}>
                            <div className={styles.card}>
                                <div className={styles.icon}>
                                    <Image src={system} style={css} alt="serviceImg" />
                                </div>
                                <h3><FormattedMessage id="service.title2" /></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique enim ut dui sagittis ultricies.</p>
                                <button type="submit"><FormattedMessage id="more" /></button>
                            </div>
                        </div>

                        <div className={styles.column}>
                            <div className={styles.card}>
                                <div className={styles.icon}>
                                    <Image src={cloud} style={css} alt="serviceImg" />
                                </div>
                                <h3><FormattedMessage id="service.title3" /></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique enim ut dui sagittis ultricies.</p>
                                <button type="submit"><FormattedMessage id="more" /></button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.section_bottom}>
                        <div className={styles.left}>
                            <div className={styles.title}>
                                <h2><FormattedMessage id="service.content1" /><br /><FormattedMessage id="service.content2" /></h2>
                            </div>
                            <div className={styles.list}>
                                <div className={styles.list_element}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/875/875636.png?w=740&t=st=1681307518~exp=1681308118~hmac=024e3905d88848286e8ef1a5b16362b96539586c4f789d1d9bebbbf11244f229" alt="check-icon" width={25} height={25} />
                                    <p><FormattedMessage id="service.content.text1" /></p>
                                </div>
                                <div className={styles.list_element}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/875/875636.png?w=740&t=st=1681307518~exp=1681308118~hmac=024e3905d88848286e8ef1a5b16362b96539586c4f789d1d9bebbbf11244f229" alt="check-icon" width={25} height={25} />
                                    <p><FormattedMessage id="service.content.text2" /></p>
                                </div>
                                <div className={styles.list_element}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/875/875636.png?w=740&t=st=1681307518~exp=1681308118~hmac=024e3905d88848286e8ef1a5b16362b96539586c4f789d1d9bebbbf11244f229" alt="check-icon" width={25} height={25} />
                                    <p><FormattedMessage id="service.content.text3" /></p>
                                </div>
                                <div className={styles.list_element}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/875/875636.png?w=740&t=st=1681307518~exp=1681308118~hmac=024e3905d88848286e8ef1a5b16362b96539586c4f789d1d9bebbbf11244f229" alt="check-icon" width={25} height={25} />
                                    <p><FormattedMessage id="service.content.text4" /></p>
                                </div>

                            </div>
                            <div className={styles.closing}>
                                <p><FormattedMessage id="service.content.text5" /><br /><FormattedMessage id="service.content.text6" /></p>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <img src="https://img.freepik.com/free-vector/business-man-working-hard-stock-financial-trade-market-diagram-vector-illustration-flat-design_1150-39773.jpg?w=740&t=st=1681305401~exp=1681306001~hmac=6590780d1af0c8295efc61d50503f66325fee79ea9904e4ae056b00462919b74" alt="service" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
