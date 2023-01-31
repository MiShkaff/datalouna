import styles from './teamCard.module.scss'

const TeamCard = (props) => {
  return (
    <div className={styles.teamCard}>
        <div className={styles.cardContent}>
            <h3 className={styles.head}>{props.name}</h3>
            <span className={styles.speciallity}>{props.speciallity}</span>
            <p className={`${styles.desc} ${styles.role}`}>{props.role}</p>
            <p className={styles.desc}>{props.desc}</p>
            <span className={styles.icon}>
              {props.icon}
            </span>
        </div>
      <img className={styles.image} src={props.image} alt="person" />
    </div>
  )
}

export default TeamCard