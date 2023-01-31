import ContactBig from '../../UI/contactBig/contactBig'
import styles from './contact.module.scss'
import img from '../../img/contactBckg.png'
const Contact = () => {
  return (
    <div className={styles.contact}>
      <img className={styles.img} src={img} alt="contactBckg" />
      <div className={styles.contactBig}>
        <ContactBig />
      </div>
    </div>
  )
}

export default Contact
