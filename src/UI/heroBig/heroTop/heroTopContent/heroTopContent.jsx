import styles from './heroTopContent.module.scss'

const HeroTopContent = () => {
  return (
    <div className={styles.heroTopContent}>
        <h2 className={styles.head}>
            DataLouna is a breakthrough in eSports data.
            We've made statistics work 
        </h2>
        <p className={styles.descTop}>
            AI-POWERED AUTOMATED <span>predictions for </span>
            CS:GO WITH IN-DEPTH ANALYTICS
        </p>
        <p className={styles.descBottom}>
            Our AI-powered fully automated platform processes various 
            different sources and calculates teams’ win probability
        </p>
        <button className={styles.btn}>
            get accees
            <svg className={styles.icon} width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={styles.icon} d="M2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196 15.021 0 14.55 0 14V11H2V14H18V2H2V5H0V2C0 1.45 0.196 0.979333 0.588 0.588C0.979333 0.196 1.45 0 2 0H18C18.55 0 19.021 0.196 19.413 0.588C19.8043 0.979333 20 1.45 20 2V14C20 14.55 19.8043 15.021 19.413 15.413C19.021 15.8043 18.55 16 18 16H2ZM9.5 12.5L8.1 11.05L10.175 9H0V7H10.175L8.1 4.95L9.5 3.5L14 8L9.5 12.5Z" fill="#181818"/>
            </svg>
        </button>
    </div>
  )
}

export default HeroTopContent