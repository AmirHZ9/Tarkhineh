import React from "react";
import styles from "../Styles/Slider.module.scss";
import img1 from "../assets/Images/Slider/slider1.png";
// icons
import { ChevronRight,ChevronLeft } from 'react-bootstrap-icons';
export default function Slider() {
  return (
    <div className={styles.slider}>
      <img src={img1} alt="" />
      <div className={styles.text}>
        <div className={styles.mainText}>
            <ChevronRight/>
          <p>شعار شعبه در اینجا نوشته میشه</p>
            <ChevronLeft/>
        </div>
        <button>سفارش آنلاین غذا</button>

      </div>
      <div  className={styles.sliderIndexMain}>

        <ul className={styles.sliderIndex}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>

      </div>
    </div>
  );
}
