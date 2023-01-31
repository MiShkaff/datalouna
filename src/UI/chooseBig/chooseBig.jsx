import styles from './chooseBig.module.scss'
import ChooseBottom from './chooseBottom/chooseBottom'
import ChooseTopContent from './chooseTop/chooseTopContent'

const ChooseBig = () => {
  return (
    <div className={styles.chooseBig}>
      <ChooseTopContent />
      <ChooseBottom />
    </div>
  )
}

export default ChooseBig
