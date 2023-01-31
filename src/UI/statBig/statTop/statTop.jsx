import StatSecond from './statSecond/statSecond'
import StatFirst from './statFirst/statFirst'
import styles from './statTop.module.scss'

const StatTop = () => {
  return (
    <div className={styles.statTop}>
        <StatFirst />
        <StatSecond />
    </div>
  )
}

export default StatTop
