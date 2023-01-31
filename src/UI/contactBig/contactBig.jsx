import styles from './contactBig.module.scss'
import ContactLeft from './contactLeft/contactLeft'
import ContactRight from './contactRight/contactRight'

const ContactBig = () => {
  return (
    <div className={styles.contactBig}>
      <ContactLeft />
      <ContactRight />
    </div>
  )
}

export default ContactBig
