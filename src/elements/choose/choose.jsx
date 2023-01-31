import ChooseBig from '../../UI/chooseBig/chooseBig'
import styles from './choose.module.scss'
import img from '../../img/chooseBckg.png'
const Choose = () => {
  return (
    <div className={styles.choose}>
      <img className={styles.img} src={img} alt="backgroundImg" />
      <div className={styles.chooseBig}>
        <ChooseBig />
      </div>
    </div>
  )
}

export default Choose
