import styles from './headerLogo.module.scss'
const HeaderLogo = () => {
  return (
    <div className={styles.headerLogo}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.30769 0C1.03319 0 0 1.03319 0 2.30769V27.6923C0 28.9668 1.03319 30 2.30769 30H27.6923C28.9668 30 30 28.9668 30 27.6923V10.0978C30 9.53887 29.7971 8.99889 29.4291 8.57822L22.6126 0.788067C22.1744 0.287263 21.5414 0 20.876 0H2.30769ZM20.7692 18.4615C21.3185 18.4615 21.8548 18.4067 22.3732 18.3023C21.1108 21.1167 18.2843 23.0769 15 23.0769C10.5392 23.0769 6.92308 19.4608 6.92308 15C6.92308 11.0885 9.70365 7.82632 13.396 7.08238C12.9438 8.09049 12.6923 9.2082 12.6923 10.3847C12.6923 14.8454 16.3085 18.4615 20.7692 18.4615Z" fill="white"/>
        </svg>
        <div className={styles.headerLogo__name}>DataLouna</div>
    </div>
  )
}

export default HeaderLogo