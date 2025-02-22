import styles from "../../styles/home/FourthSection.module.css";
import React from "react";

const  FourthSection= () => {
    return (
        <section className={styles.fourthContainer}>
            <h1>Bize Ulaşın</h1>
            <form className={styles.contactForm}>
                <div className={styles.inputGroups}>
                    <input type="text" className={styles.formElements} placeholder="Adınız" required />
                    <input type="email" className={styles.formElements}  placeholder="Email Adresiniz" required />
                </div>
                <textarea  className={styles.formElements}  placeholder="Mesajınızı Giriniz"></textarea>
                <p></p>
                <button type="submit" className={styles.formButton}>KAYDET</button>
            </form>
        </section>

    )
};

export  default FourthSection
