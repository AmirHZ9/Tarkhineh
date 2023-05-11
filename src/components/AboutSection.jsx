import React from "react";
import styles from "../Styles/AboutSection.module.scss";
import background from "../assets/about.png";
import {Clipboard2Check,
    Person,GraphUp, ChevronLeft,HouseHeart
}from "react-bootstrap-icons";

export default function AboutSection() {
  return (
    <div className={styles.aboutSection}>
      <img src={background} alt="aboutUs" />
      <div className={styles.aboutMain}>
        <div className={styles.aboutTarkhineh}>
          <h4>رستوران‌های زنجیره‌ای ترخینه</h4>
          <p>
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
            شان شما عزیزان ارائه دهیم.
          </p>
          <br />
          <div className={styles.moreInfo}>
            <a href="#">
              {" "}
              اطلاعت بیشتر{" "}
              <span>
                <ChevronLeft />
              </span>{" "}
            </a>
          </div>
        </div>
      <div className={styles.aboutUsIcon}>
        <ul>
            <li><Person width={"48px"} height={"48px"}/>پرسنل مجرب و حرفه ای </li>
            <li><GraphUp width={"48px"} height={"48px"}/>کیفیت بالای غذاها </li>
            <li><HouseHeart width={"48px"} height={"48px"}/>محیطی دلنشین و آرام</li>
            <li><Clipboard2Check width={"48px"} height={"48px"}/>منوی متنوع </li>
        </ul>
      </div>
      </div>

    </div>
  );
}
