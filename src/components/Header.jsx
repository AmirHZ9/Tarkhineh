import React from 'react'
import { Person,Search,Cart3 ,ChevronDown} from 'react-bootstrap-icons';
import Logo from "../assets/Logo.png"
import styles from "../Styles/Header.module.scss"
export default function Header() {
  return (
    <header className={styles.header}>
    <div>
        <img src={Logo} alt="logo" />
    </div>
    <div>
        <ul className={styles.menu}>
            <li>صفحه اصلی</li>
            <li>شعبه<ChevronDown/></li>
            <li>منو<ChevronDown/></li>
            <li>اعطای نمایندگی</li>
            <li>درباره ما</li>
            <li>تماس با ما</li>
        </ul>
    </div>
    <div>
        <ul className={styles.leftIcons}>
            <li><Search/></li>
            <li><Cart3/></li>
            <li><Person/></li>
        </ul>
    </div>
    <div>
        
    </div>
    </header>
  )
}
