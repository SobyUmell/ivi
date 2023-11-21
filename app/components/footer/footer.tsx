import React from "react";
import styles from './footer.module.scss';

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.author}>designed by Eva</div>
        <div className={styles.info}>
            <span className={styles.phone}>phone: *****</span>
            <span className={styles.email}>email: ****@email.com</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;