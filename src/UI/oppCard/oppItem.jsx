import styles from './opp.module.scss'

const OppItem = (props) => {
  return (
    <div>
      <div className={styles.desc}>{props.item}</div>
    </div>
  )
}

export default OppItem
