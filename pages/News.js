import React from 'react'
import styles from '@/styles/News.module.css'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'

import { FormattedMessage } from 'react-intl'

export default function News() {

    return (
        <div className="background">
            <Navbar />
            <div className={styles.body}>
                <div className={styles.header}>
                    <p><FormattedMessage id="news.header.text"/></p>
                    <h3><FormattedMessage id="news.header"/></h3>
                </div>
                <div className={styles.timeline}>
                    <div className={styles.checkpoint}>
                        <div className={styles.contentImg}>
                            <p><FormattedMessage id="news.content"/></p>
                            <img
                                src="https://plus.unsplash.com/premium_photo-1677717787558-c0c9c2090973?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8YWV1NnJMLWo2ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                                alt="content image"
                                width={300} height={210} />
                        </div>
                        <div className={styles.contentText}>
                            <h4><FormattedMessage id="news.content.topic1"/></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique enim ut dui sagittis ultricies. Aenean ut felis et orci semper iaculis. Vivamus et mollis libero, feugiat elementum lectus. Donec.
                            </p>
                        </div>
                    </div>

                    <div className={styles.checkpoint}>
                        <div className={styles.contentImg}>
                            <p className={styles.left_text}><FormattedMessage id="news.content2"/></p>
                            <img
                                src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                alt="content image"
                                width={300} height={210} />
                        </div>
                        <div className={styles.contentText}>
                            <h4 className={styles.left_text}><FormattedMessage id="news.content.topic2"/></h4>
                            <p className={styles.left_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique enim ut dui sagittis ultricies. Aenean ut felis et orci semper iaculis. Vivamus et mollis libero, feugiat elementum lectus. Donec.
                            </p>
                        </div>
                    </div>

                    <div className={styles.checkpoint}>
                        <div className={styles.contentImg}>
                            <p><FormattedMessage id="news.content3"/></p>
                            <img
                                src="https://plus.unsplash.com/premium_photo-1670872717061-fc5fab920ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyMHxhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                                alt="content image"
                                width={300} height={210} />
                        </div>
                        <div className={styles.contentText}>
                            <h4><FormattedMessage id="news.content.topic3"/></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique enim ut dui sagittis ultricies. Aenean ut felis et orci semper iaculis. Vivamus et mollis libero, feugiat elementum lectus. Donec.
                            </p>
                        </div>
                    </div>

                    <div className={styles.checkpoint}>
                        <div className={styles.contentImg}>
                            <p className={styles.left_text}><FormattedMessage id="news.content4"/></p>
                            <img
                                src="https://images.unsplash.com/photo-1673101609020-4b5e203885bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY2fGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                alt="content image"
                                width={300} height={210} />
                        </div>
                        <div className={styles.contentText}>
                            <h4 className={styles.left_text}><FormattedMessage id="news.content.topic4"/></h4>
                            <p className={styles.left_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique enim ut dui sagittis ultricies. Aenean ut felis et orci semper iaculis. Vivamus et mollis libero, feugiat elementum lectus. Donec.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
