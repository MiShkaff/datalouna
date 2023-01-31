import styles from './statFirst.module.scss'
import data from '../../../../data/data'
import StatDescs from './statDescs'
let descs = data.stat.statDescsFirst.map(el => <StatDescs desc={el.desc} />)
const StatFirst = () => {
  return (
    <div className={styles.statFirst}>
      <h3 className={styles.head}>datalouna 4 b2b</h3>
      {descs}
    </div>
  )
}

export default StatFirst
