import styles from './bcg.module.scss';

const Bcg = (): JSX.Element => {
  return (
    <div className={styles.bcg}>
      <div className={styles.label}>
        <h2>
          Узнай о популярных жанров прошлого
        </h2>
      </div>
    </div>
  )
}

export default Bcg