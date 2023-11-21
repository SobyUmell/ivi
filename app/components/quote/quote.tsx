import styles from './quote.module.scss';
const Quote = (): JSX.Element => {
  return (
    <section className={styles.quote}>
      <div className={styles.container}>
        <p className={styles.text}>
          Искусство - бесконечное пространство творчества, в котором сливаются эмоции, формы и цвета, погружая нас в мир истинной красоты и восхитительных историй!
        </p>
        <div className={styles.picture}></div>
      </div>
    </section>
  )
}

export default Quote;