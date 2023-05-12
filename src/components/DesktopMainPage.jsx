import React from 'react'
import styles from "../Styles/desktopMain.module.scss"
import ResturantMenu from './ResturantMenu'
import AboutSection from './AboutSection'
import Branches from './Branches'
export default function DesktopMainPage() {
  return (
    <div className={styles.main}>
      <ResturantMenu/>
      <AboutSection/>
      <Branches/>
    </div>
  )
}
