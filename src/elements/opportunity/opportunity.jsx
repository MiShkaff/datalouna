import styles from './opportunity.module.scss'
import Opp from '../../UI/oppCard/opp'
import img from '../../img/oppBckg.png'
const Opportunity = () => {
  return (
    <div className={styles.opportunity}>
      <img className={styles.img} src={img} alt="opportunityBckg" />
      <div className={styles.opportunityBig}>
        <h2 className={styles.head}>what awaits you in datalouna club</h2>
        <Opp />
      </div> 
    </div>
  )
}

export default Opportunity
