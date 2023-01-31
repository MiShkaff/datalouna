import styles from './statFourth.module.scss'

const StatFourthDescs = (props) => {
  return (
    <div>
      <p className={styles.listDescs}>{props.desc}</p>
    </div>
  )
}

export default StatFourthDescs
