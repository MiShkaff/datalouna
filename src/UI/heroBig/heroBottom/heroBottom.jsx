import styles from './heroBottom.module.scss'
import data from '../../../data/data'
import Card from './heroBottomCard'
let heroBottomLeft = data.heroBottom.heroBottomLeft.map(el => <Card number={el.number} desc={el.desc}/>)
let heroBottomCenter = data.heroBottom.heroBottomCenter.map(el => <Card number={el.number} desc={el.desc}/>)
let heroBottomRight = data.heroBottom.heroBottomRight.map(el => <Card number={el.number} desc={el.desc}/>)
const HeroBottom = () => {
  return (
    <div className={styles.heroBottom}>
      {heroBottomLeft}
      {heroBottomCenter}
      {heroBottomRight}
    </div>
  )
}

export default HeroBottom
