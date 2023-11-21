import Label from '../label/label';
import styles from './table3.module.scss';

const Table3 = (): JSX.Element => {
  return (
    <>
      <Label title='Лучшие художники XIX века' />
      <div className={styles.table3}>
        <div className={styles.artists}>
        </div>
      </div>
    </>
    
  )
}

export default Table3;