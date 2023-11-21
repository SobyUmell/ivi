import Label from '../label/label';
import styles from './gallery.module.scss';

const Gallery = (): JSX.Element => {
  return (
    <div className={styles.gallery}>
      <Label title='Лучшие художники XX века' />
      <div className={styles.block}>
        <div className={styles.content}>
          <h2>
            Дэвид Хокни
          </h2>
          <p>
            Дэвид Хокни сделал «Большой всплеск» в мире искусства во второй половине XX века. Он был очень влиятельным художником во время поп-арт движения 1960-х годов.
          </p>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.content}>
          <h2>
            Дэвид Хокни
          </h2>
          <p>
            Дэвид Хокни сделал «Большой всплеск» в мире искусства во второй половине XX века. Он был очень влиятельным художником во время поп-арт движения 1960-х годов.
          </p>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.content}>
          <h2>
            Дэвид Хокни
          </h2>
          <p>
            Дэвид Хокни сделал «Большой всплеск» в мире искусства во второй половине XX века. Он был очень влиятельным художником во время поп-арт движения 1960-х годов.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Gallery;