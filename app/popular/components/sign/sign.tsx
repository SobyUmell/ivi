
import styles from'./sign.module.scss'


const Sign = (): JSX.Element => {

  return (
    <div className={styles.sign}>
      <button className={styles.label}>Успей зарегистрироваться</button>
      <div className={styles.section}>
        <div className={styles.form}>
          <span>Регистрация на выставку</span>
        </div>
        <div className={styles.calendar}>

        </div>
      </div>
    </div>
  )
}

export default Sign;