import React from 'react'
import styles from "../Styles/resturantMenu.module.scss"
import Appetizer from "../assets/Appetizer.png"
import Beverages from "../assets/Beverages.png"
import dessert from "../assets/desert.png"
import maincourse from "../assets/maincourse.png"
export default function ResturantMenu() {
  return (
    <div className={styles.ResturantMenu}>
        <p className={styles.title}>منوی رستوران</p>
        <div>
            <ul className={styles.menu}>
                <li>
                    <img src={maincourse} alt="maincourse" />
                    <button>غذا اصلی</button>
                </li>
                <li>
                    <img src={Appetizer} alt="Appetizer" />
                    <button>پیش غذا</button>
                </li>
                <li>
                    <img src={dessert} alt="dessert" />
                    <button>دسر</button>
                </li>
                <li>
                    <img src={Beverages} alt="Beverages" />
                    <button>نوشیدنی</button>
                </li>
            </ul>
        </div>
    </div>
  )
}
