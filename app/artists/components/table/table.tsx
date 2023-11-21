'use client'
import { useState } from 'react';
import Label from '../label/label';
import styles from './table.module.scss';

const Table = (): JSX.Element => {
  const [current, setCurrent] = useState(1);

  return (
    <div className={styles.table}>
      <div className={styles.decs}>
        <div className={styles.content}>
          <span>XVII</span>
          <span>XIII</span>
          <span>XIX</span>
          <span>XX</span>
          <span>XXI</span>
        </div>
      </div>
      <Label title='Лучшие художники XVII века' />
      <div className={styles.artists}>
        <div className={styles.options}>
          <div onClick={() => setCurrent(1)} className={`${styles.option} ${current === 1 ? styles.active : ''}`} >
            <div className={styles.text}>
              <h2>Питер-Пауль Рубенс</h2>
              <p>
                Питер-Пауль Рубенс (годы жизни 1577-1640 [прожил 63 года]) – считается самым известным художником фламандского барокко. Он создал уникальный стиль барокко и работал над многочисленными шедеврами, в том числе алтарями, портретами, пейзажами и историческими картинами, включающими в себя религиозные и мифические сюжеты.
              </p>
            </div>
          </div>
          <div onClick={() => setCurrent(2)} className={`${styles.option} ${current === 2 ? styles.active : ''}`}>
            <div className={styles.text}>
              <h2>Питер-Пауль Рубенс</h2>
              <p>
                Питер-Пауль Рубенс (годы жизни 1577-1640 [прожил 63 года]) – считается самым известным художником фламандского барокко. Он создал уникальный стиль барокко и работал над многочисленными шедеврами, в том числе алтарями, портретами, пейзажами и историческими картинами, включающими в себя религиозные и мифические сюжеты.
              </p>
            </div>
          </div>
          <div onClick={() => setCurrent(3)} className={`${styles.option} ${current === 3 ? styles.active : ''}`}>
            <div className={styles.text}>
              <h2>Питер-Пауль Рубенс</h2>
              <p>
                Питер-Пауль Рубенс (годы жизни 1577-1640 [прожил 63 года]) – считается самым известным художником фламандского барокко. Он создал уникальный стиль барокко и работал над многочисленными шедеврами, в том числе алтарями, портретами, пейзажами и историческими картинами, включающими в себя религиозные и мифические сюжеты.
              </p>
            </div>
          </div>
          <div onClick={() => setCurrent(4)} className={`${styles.option} ${current === 4 ? styles.active : ''}`}>
            <div className={styles.text}>
              <h2>Питер-Пауль Рубенс</h2>
              <p>
                Питер-Пауль Рубенс (годы жизни 1577-1640 [прожил 63 года]) – считается самым известным художником фламандского барокко. Он создал уникальный стиль барокко и работал над многочисленными шедеврами, в том числе алтарями, портретами, пейзажами и историческими картинами, включающими в себя религиозные и мифические сюжеты.
              </p>
            </div>
          </div>
          <div onClick={() => setCurrent(5)} className={`${styles.option} ${current === 5 ? styles.active : ''}`}>
            <div className={styles.text}>
              <h2>Питер-Пауль Рубенс</h2>
              <p>
                Питер-Пауль Рубенс (годы жизни 1577-1640 [прожил 63 года]) – считается самым известным художником фламандского барокко. Он создал уникальный стиль барокко и работал над многочисленными шедеврами, в том числе алтарями, портретами, пейзажами и историческими картинами, включающими в себя религиозные и мифические сюжеты.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table;