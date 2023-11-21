import styles from './menu.module.scss';

const Menu = (): JSX.Element => {
  return (
    <nav className={styles.menu}>
      <div className={styles.item}>
        <p className={styles.label}>Ренессанс</p>
      </div>
      <div className={styles.item}>
        <p className={styles.label}>Классицизм</p>
      </div>
      <div className={styles.item}>
        <p className={styles.label}>Барокко</p>
      </div>
      <div className={styles.item}>
        <p className={styles.label}>Рококо</p>
      </div>
      <div className={styles.item}>
        <p className={styles.label}>Импрессионизм</p>
      </div>
      <div className={styles.item}>
        <p className={styles.label}>Марина</p>
      </div>
    </nav>
  )
}

export default Menu;