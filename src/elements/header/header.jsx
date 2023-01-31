import HeaderButton from '../../UI/headerBig/headerButton/headerButton'
import HeaderLogo from '../../UI/headerBig/headerLogo/headerLogo'
import HeaderNav from '../../UI/headerBig/headerNav/headerNav'
import styles from './header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <HeaderLogo />
      </div>
      <div className={styles.headerNav}>
        <HeaderNav />
      </div>
      <div className={styles.headerBtn}>
        <HeaderButton />
      </div>
    </div>
  )
}

export default Header