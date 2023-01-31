import styles from './statBottom.module.scss'
import StatThird from './statThird/statThird'
import StatFourth from './statFourth/statFourth'
const StatBottom = () => {
  return (
    <div className={styles.statBottom}>
      <StatThird />
      <StatFourth />
    </div>
  )
}

export default StatBottom
