import styles from './statFirst.module.scss'

const StatDescs = (props) => {
  return (
    <div>
      <p className={styles.desc}>{props.desc}</p>
    </div>
  )
}

export default StatDescs
