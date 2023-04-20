import React, { useState } from 'react'
import styles from '@/styles/About.module.css'
import Team from '../components/Team';
import { FormattedMessage } from 'react-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className={styles.container}>
                <Navbar />
                <div className={styles.hero}>
                    <div className={styles.text}>
                        <h1><FormattedMessage id="about.head" /></h1>
                        <p><FormattedMessage id="about.info" /></p>
                    </div>
                </div>
            </div>
            <section className={styles.section}>
                <div className={styles.content}>
                    <div className={styles.mission}>
                        <h1><FormattedMessage id="mission" /></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor nulla nec lacus dictum, nec maximus ipsum sagittis. Sed ultrices.</p>
                    </div>
                </div>
            </section>
            <section className={styles.team}>
                <div className={styles.teamHeader}>
                    <h1><FormattedMessage id="team" /></h1>
                    <div className={styles.dropdown}>
                        <button className='dropdownTrigger' onClick={() => { setOpen(!open) }} >All positions</button>
                        <div className={`dropdownMenu ${open ? `active` : `inactive`}`} >
                            <ul>
                                <DropdownItem text={"Founder"} />
                                <DropdownItem text={"Project Management"} />
                                <DropdownItem text={"Finance "} />
                                <DropdownItem text={"Lead Developer"} />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.cards_wrap}>
                    <Team
                        image={"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
                        name={"Jonathan Cardella"}
                        position={'Founder'}
                    />
                    <Team
                        image={"https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}
                        name={"Joe Mauslig"}
                        position={'Project Management'}
                    />
                    <Team
                        image={"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
                        name={"Andy Martin"}
                        position={'Project Management'}
                    />
                    <Team
                        image={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
                        name={"Sarah Cardella"}
                        position={'Project Management'}
                    />

                    <Team
                        image={"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
                        name={"Ryan Johnson"}
                        position={'Project Management'}
                    />
                    <Team
                        image={"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
                        name={"Uzair Munis"}
                        position={'Project Management'}
                    />
                    <Team
                        image={"https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
                        name={"Jessi Schumacher"}
                        position={'Project Management'}
                    />
                    <Team
                        image={"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
                        name={"Vladimir Dzhidzhiye"}
                        position={'Lead Developer'}
                    />
                </div>
            </section>

            <div className={styles.map_section}>
                <div className={styles.mapouter}>
                    <div className={styles.gmap_canvas}>
                        <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=california&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

function DropdownItem({ text }) {
    return (
        <li className={styles.dropdownItem}>
            <a>{text}</a>
        </li>
    )
}
