import React from 'react'
import styles from '@/styles/Home.module.css'

export default function Team({image, name, position}) {
    return (
        
            <div className={styles.card_item}>               
                <div className={styles.card_inner}>
                    <img src={image} alt="profileImg" />
                    <div className={styles.name}>{name}</div>
                    <div className={styles.position}>{position}</div>
                    <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
                </div>
            </div>
        
    )
}
