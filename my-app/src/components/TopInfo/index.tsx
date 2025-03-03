import React from "react";
import Icon from "../Icon";
import styles from "./styles.module.css";
import Link from "next/link";

export default function TopInfo() {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.icon}>
        <Link href="/">          
            <Icon
              name="facebook"
              size="1.75rem"
              backgroundColor="#2e467e"
              color="white"
            />
        </Link>
        </div>
        <div className={styles.icon}>
        <Link href="https://www.instagram.com/bilir.nakliyatt/">
            <Icon
              name="instagram"
              size="1.75rem"
              backgroundColor="#d62976"
              color="white"
            />
        </Link>
        </div>
        <div className={styles.icon}>
        <Link href="/">
            <Icon
              name="twitter"
              size="1.75rem"
              backgroundColor="#1da1f2"
              color="white"
            />
        </Link>
        </div>
        <div className={styles.clock}>
          <Icon name="clock" size="1.75rem" color="white" />
        </div>
        |
        <div className={styles.tel}>
          <a href="tel:05317473909" className={styles.phone}>
            <span>
              +90 (531) 747 3909{" "}
            </span>
              <Icon name="telephone" size="1.5rem" color="white" />
          </a>
        </div>
      </div>
    </div>
  );
}
