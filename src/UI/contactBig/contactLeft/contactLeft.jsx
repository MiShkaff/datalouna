import styles from './contactLeft.module.scss'

const ContactLeft = () => {
  return (
    <div className={styles.contactLeft}>
        <h2 className={styles.head}>"in god we trust, all other bring data"</h2>
        <span className={styles.name}>— W.Edward Deming</span>
        <p className={styles.desc}>If you want to be the best in CS:GO just contact us</p>
    </div>
  )
}

export default ContactLeft