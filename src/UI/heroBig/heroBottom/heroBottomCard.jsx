import styles from './heroBottom.module.scss'

const Card = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardNumber}>{props.number}</div>
            <p className={styles.cardDesc}>{props.desc}</p>
        </div>
    )
}

export default Card;