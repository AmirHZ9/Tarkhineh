import React from "react";
import styles from "../Styles/footer.module.scss";
import { Instagram, Telegram, Twitter } from "react-bootstrap-icons";
import egg from "../assets/egg.jpeg";
export default function Footer() {
  return (
    <footer>
      <img src={egg} alt="egg" />
      <div className={styles.main}>
        <ul className={styles.access}>
          <li> دسترسی آسان</li>
          <li>
            <a href="#"> پرسش‌های متداول</a>
          </li>
          <li>
            <a href="#"> قوانین ترخینه</a>
          </li>
          <li>
            <a href="#"> حریم خصوصی</a>
          </li>
          <li>
            <a href="#">
              <Twitter />
            </a>
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <Telegram />
            </a>
          </li>
        </ul>
        <ul className={styles.branches}>
          <li>شعبه‌های ترخینه</li>
          <li>
            <a href="#">شعبه اکباتان</a>
          </li>
          <li>
            <a href="#">شعبه چالوس</a>
          </li>
          <li>
            <a href="#">شعبه اقدسیه</a>
          </li>
          <li>
            <a href="#">شعبه ونک</a>
          </li>
        </ul>
        <ul className={styles.contact}>
          <li>پیام به ترخینه </li>
          <li>
            <input type="text" placeholder="نام و نام خانوادگی" />
          </li>
          <li>
            <input type="text" placeholder="شماره تماس" />
          </li>
          <li>
            <input type="text" placeholder="آدرس ایمیل (اختیاری)" />
          </li>
        </ul>
        <ul className={styles.textarea}>
          <li>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="پیام شما"
            ></textarea>
          </li>
          <li>
            <button>ارسال پیام</button>
          </li>
        </ul>
      </div>
    </footer>
  );
}
