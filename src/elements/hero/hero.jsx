import HeroBottom from '../../UI/heroBig/heroBottom/heroBottom'
import HeroTopContent from '../../UI/heroBig/heroTop/heroTopContent/heroTopContent'
import HeroTopImg from '../../UI/heroBig/heroTop/heroTopImg/heroTopImg'
import styles from './hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroBig}>
        <div className={styles.heroTop}>
          <HeroTopContent />
          <HeroTopImg />
        </div>
        <div className={styles.bottom}>
          <HeroBottom />
        </div>
      </div>
    </div>
  )
}

export default Hero