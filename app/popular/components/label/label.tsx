import styles from './label.module.scss';

const Label = ({title} : {
  title: string,
}): JSX.Element => {
  return (
    <div className={styles.label}>
      <div>{title}</div>
    </div>
  )
}

export default Label