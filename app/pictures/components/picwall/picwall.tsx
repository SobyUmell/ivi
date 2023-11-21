import Label from '../label/label';
import styles from './picwall.module.scss';
const Picwall = (): JSX.Element => {

  return (
    <>
      <Label title='Современное искусство' />
      <div className={styles.picwall}></div>
    </>
    
  )
}

export default Picwall;