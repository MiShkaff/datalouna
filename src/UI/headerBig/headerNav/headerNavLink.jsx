import styles from './headerNav.module.scss'

const HeaderNavLink = (props) => {
    return (
        <li className={styles.headerItem}>
            <a href="" className={styles.headerLink}>{props.headerLinkName}</a>
        </li>
    )
}

export default HeaderNavLink