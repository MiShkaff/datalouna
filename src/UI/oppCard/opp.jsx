import styles from './opp.module.scss'
import OppItem from './oppItem';
import data from '../../data/data'
import img1 from '../../img/opp-1.png'
import img2 from '../../img/opp-2.png'
import img3 from '../../img/opp-3.png'
let oppLeftItem = data.opp.oppLeft.map(el => <OppItem item={el.item}/>);
let oppCenterItem = data.opp.oppCenter.map(el => <OppItem item={el.item}/>);
let oppRightItem = data.opp.oppRight.map(el => <OppItem item={el.item}/>);

const Opp = (props) => {
  return (
    <div className={styles.opp}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h3 className={styles.head}>Social networks</h3>
          </li>
          <li className={styles.item}>
            {oppLeftItem}
          </li>
          <li className={styles.item}>
            <img className={styles.img} src={img1} alt="cardImg" />
          </li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h3 className={styles.head}>Private community</h3>
          </li>
          <li className={styles.item}>
            {oppCenterItem}
          </li>
          <li className={styles.item}>
            <img className={styles.img} src={img2} alt="cardImg" />
          </li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.ite}>
            <h3 className={styles.head}>Service</h3>
          </li>
          <li className={styles.ite}>
            {oppRightItem}
          </li>
          <li className={styles.ite}>
            <img className={styles.img} src={img3} alt="cardImg" />
          </li>
        </ul>
    </div>
  )
}

export default Opp
