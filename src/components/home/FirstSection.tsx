import styles from "../../styles/home/FirstSection.module.css";
import React from "react";

const  FirstSection= () => {
    return (
        <section className={styles.firstSection}>
            <div className={styles.imageContainer}>
                <img src="/home/happyman3.jpg" alt="Örnek Resim"/>
            </div>

            <div className={styles.contentContainer}>
                <h1>İstanbul&apos;da Güvendiğiniz Kargocunuz!</h1>
                <h2>Çok hızlı değişen şehir ritminde, paketleriniz bende güvende.</h2>
            </div>
        </section>
    )
};

export  default FirstSection
