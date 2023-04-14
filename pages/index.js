import Navbar from "@/components/Navbar"
import About from "./About"
import Footer from "@/components/Footer"
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <Navbar />
        <About />
        <Footer />
      </div>
    </>
  )
}
