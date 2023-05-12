import React from "react";
import styles from "../Styles/branches.module.scss";
import vanak from "../assets/Vanak.png";
import ekbatan from "../assets/ekbatan.png";
import aghdasie from "../assets/aghdasie.png";
import challous from "../assets/about.png";
export default function Branches() {
  return (
    <div className={styles.branches}>
      <h5 className={styles.branchTitle}>ترخینه گردی</h5>
      <div className={styles.tarkhinehBranch}>
        <ul>
          <li>
            <img src={ekbatan} alt="شعبه اکباتان" />
            <div className={styles.branchAddress}>
              <span>شعبه اکباتان</span>
              <p>شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</p>
            </div>
          </li>
          <li>
            <img src={challous} alt="شعبه چالوس" />
            <div className={styles.branchAddress}>
              <span>شعبه چالوس</span>
              <p>
                چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر
                میلانی
              </p>
            </div>
          </li>
          <li>
            <img src={aghdasie} alt="شعبه اقدسیه" />
            <div className={styles.branchAddress}>
              <span>شعبه اقدسیه</span>
              <p>خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸</p>
            </div>
          </li>
          <li>
            <img src={vanak} alt="شعبه ونک" />
            <div className={styles.branchAddress}>
              <span>شعبه ونک</span>
              <p>میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
