import React from 'react'
import styles from "../Styles/desktopMain.module.scss"
import ResturantMenu from './ResturantMenu'
import AboutSection from './AboutSection'
export default function DesktopMainPage() {
  return (
    <div className={styles.main}>
      <ResturantMenu/>
      <AboutSection/>
    </div>
  )
}
