import Label from '../label/label';
import styles from './table2.module.scss';

const Table2 = (): JSX.Element => {
  return (
    <>
      <Label title='Лучшие художники XVIII века' />
      <div className={styles.table2}>
        <div className={styles.artists}>
        </div>
      </div>
    </>
    
  )
}

export default Table2;