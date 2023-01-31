import styles from './footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footerBig}>
            <p className={styles.desc}>
                Czech, Prague, elisky Krasnohorske, 10/2, 5.23, 110 00 Prague 1
            </p>
            <a href="" className={styles.link}>
              gg@datalounaesport.com
            </a>
        </div>
    </div>
  )
}

export default Footer
