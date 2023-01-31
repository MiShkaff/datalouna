import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import styles from './contactRight.module.scss'
import handImg from '../../../img/contactImg.png'
import data from '../../../data/data'
import Checkbox from './checkbox';

let checkboxes = data.check.map(el => <Checkbox checkbox={el.checkbox} />)

const ContactRight = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_k1n8obl', 'template_vady2t8', form.current, 'l-9dRSkcy5baYLmvm')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <div className={styles.contactRight}>
            <div className={styles.contactRight__top}>
                <h2 className={styles.head}>Contact Us</h2>
                <img className={styles.img} src={handImg} alt="hand" />
            </div>
            <div className={styles.contactRight__bottom}>
                <form className={styles.form} ref={form} onSubmit={sendEmail}>
                    <div className={styles.contactRight__bottomRight}>
                        <div className={styles.contactRight__left}>
                            <label className={styles.label}>You:</label>
                            {checkboxes}
                        </div>
                        <div className={styles.contactRight__right}>
                            <label className={styles.label}>Your email:</label>
                            <input type="email" className={styles.input} name="name" />
                            <label className={styles.label}>Your message:</label>
                            <input type="text" className={styles.input} name="message" />
                        </div>
                    </div>
                    <button className={styles.btn} type="submit">Submit</button>
                </form> 
            </div>
        </div>
    );
}

export default ContactRight