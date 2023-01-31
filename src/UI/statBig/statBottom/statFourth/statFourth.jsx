import styles from './statFourth.module.scss'
import data from '../../../../data/data'
import StatFourthDescs from './statFourthDescs'

let descs = data.stat.statDescsFourth.map(el => <StatFourthDescs desc={el.desc} />)
const StatFourth = () => {
  return (
    <div className={styles.statFourth}>
      <h3 className={styles.head}>solution from b2b</h3>
      <span className={styles.greyText}>The eSports industry is built on data.</span>
      <p className={styles.desc}>Whoever has the best data runs the show:</p>
      {descs}
      <p className={styles.desc}>The technology is a big step forward for the entire eSports industry</p>
    </div>
  )
}

export default StatFourth
