import styles from './contactRight.module.scss'

const Radio = (props) => {
  return (
    <div className={styles.radioBlock}>
        <label className={styles.radioLabel}>
          <input className={styles.radio} type="radio" value={props.checkbox} name="user_checkbox" />
          <span className={styles.radioNonChecked}></span>
          <span className={styles.radioText}>
            {props.checkbox}
          </span>
        </label>
    </div>
  )
}

export default Radio