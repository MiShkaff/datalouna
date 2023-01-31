import styles from './statBig.module.scss'
import StatTop from './statTop/statTop'
import StatBottom from './statBottom/statBottom'
const StatBig = () => {
  return (
    <div className={styles.statBig}>
        <StatTop />
        <StatBottom />
    </div>
  )
}

export default StatBig
