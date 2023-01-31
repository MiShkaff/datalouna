import TeamCard from '../../UI/teamCard/teamCard'
import styles from './team.module.scss'
import data from '../../data/data'
import img from '../../img/teamBckg.png'
let cardContent = data.dataTeam.map(el => <TeamCard name={el.name}
  speciallity={el.speciallity} 
  role={el.role} 
  desc={el.desc} 
  image={el.image} 
  icon={el.icon}
/>)
const Team = (props) => {
  return (
    <div className={styles.team}>
      <img className={styles.img} src={img} alt="teamBckg" />
      <div className={styles.teamBig}>
        <h2 className={styles.head}>meet our team</h2>
        <div className={styles.cards}>
          {cardContent}
        </div>
      </div> 
    </div>
  )
}

export default Team
