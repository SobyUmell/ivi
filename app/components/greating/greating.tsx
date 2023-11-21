import styles from './greating.module.scss';

const Greating = (): JSX.Element => {
  return (
    <section className={styles.ocean}>
      <div className={styles.square}>
        <div className={styles.quote}>
          <p className={styles.text}>
            ПОГРУЗИСЬ В ПУЧИНЫ ИССКУСТВА
          </p>
        </div>
      </div>
    </section>
  )
}

export default Greating;