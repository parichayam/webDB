import Navbar from "@/components/Navbar"
import HomePage from "./homepage"
import Feature from "@/components/features"
import Section from "@/components/section"
import Footer from "@/components/Footer"
import styles from '@/styles/Home.module.css'
import Signup from "@/components/signup"

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <Navbar />
        <HomePage />
      </div>
      <Feature />
      <Section />
      <Signup />
      <Footer />
    </>
  )
}
