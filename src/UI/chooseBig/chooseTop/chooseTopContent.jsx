import styles from './chooseTopContent.module.scss'

const ChooseTopContent = () => {
  return (
    <div className={styles.chooseTopContent}>
      <h2 className={styles.head}>Why choose datalouna</h2>
      <p className={styles.desc}>
        We created an ecosystem where users<span> can evolve, communicate,
        engage in development</span> and <span>make profit</span> with the help of the service
      </p>
    </div>
  )
}

export default ChooseTopContent
