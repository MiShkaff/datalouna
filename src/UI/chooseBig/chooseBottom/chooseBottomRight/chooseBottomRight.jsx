import styles from './chooseBottomRight.module.scss'

const ChooseBottomRight = () => {
  return (
    <div className={styles.chooseBottomRight}>
      <h3 className={styles.head}>
        how it works
      </h3>
      <p className={styles.desc}>
        Since the eSports industry is fully digitized, 
        big data makes it possible to obtain and analyze metrics from all available matches. 
        We’ve developed an in-house data processing and cleaning methodology (Data Mining), 
        which transforms statistical events into features for our machine learning prediction model. 
        All events are developed by professional CS:GO coaches.
      </p>
    </div>
  )
}

export default ChooseBottomRight
