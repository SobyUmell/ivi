'use client'
import { useState } from 'react';
import Label from '../label/label';
import styles from './table.module.scss';

const Table = (): JSX.Element => {
  const [current, setCurrent] = useState(1);

  return (
    <div className={styles.table}>

      <Label title='Искусство прошлого' />
      <div className={styles.artists}>
        <div className={styles.options}>
          <div onClick={() => setCurrent(1)} className={`${styles.option} ${current === 1 ? styles.active : ''}`} >

          </div>
          <div onClick={() => setCurrent(2)} className={`${styles.option} ${current === 2 ? styles.active : ''}`}>

          </div>
          <div onClick={() => setCurrent(3)} className={`${styles.option} ${current === 3 ? styles.active : ''}`}>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Table;