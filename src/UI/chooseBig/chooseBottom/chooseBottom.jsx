import styles from './chooseBottom.module.scss'
import ChooseBottomLeft from './chooseBottomLeft/chooseBottomLeft'
import ChooseBottomRight from './chooseBottomRight/chooseBottomRight'

const ChooseBottom = () => {
  return (
    <div className={styles.chooseBottom}>
      <ChooseBottomLeft />
      <ChooseBottomRight />
    </div>
  )
}

export default ChooseBottom
