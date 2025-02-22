import styles from "../../styles/services/SecondSection.module.css";
import React from "react";

const  SecondSection= () => {
    return (
        <section className={styles.secondSection}>
            <div className={styles.gridContainer}>
                <div className={styles.gridCards}>
                    <div className={styles.gridCard}>
                        <img src="/services/card1.png" alt ="Onek Resim"></img>
                        <h1>Express Teslimat</h1>
                        <p>2-4 saatte hızlı teslimat seçeneğidir. Ürününüz için özel araç yollarız.</p>
                    </div>
                    <div className={styles.gridCard}>
                        <img src="/services/card2.png" alt ="Onek Resim"></img>
                        <h1>Aynı Gün Teslimat</h1>
                        <p>Araç tipi fark etmeden tüm ürünlerinizi aynı gün teslim ederiz.</p>
                    </div>
                    <div className={styles.gridCard}>
                        <img src="/services/card3.png" alt ="Onek Resim"></img>
                        <h1>Ertesi Gün Teslimat</h1>
                        <p>Mesafenin uzun olduğu bölgelere Ertesi Gün Teslimat seçeceği sunarız.</p>
                    </div>
                    <div className={styles.gridCard}>
                        <img src="/services/card4.png" alt ="Onek Resim"></img>
                        <h1>Parsiyel Teslimatlar</h1>
                        <p>Ürünleriniz parça ise Parsiyel Teslimat seçeneği size uygundur.</p>
                    </div>
                    <div className={styles.gridCard}>
                        <img src="/services/card5.png" alt ="Onek Resim"></img>
                        <h1>Sürekli Teslimat</h1>
                        <p>Dedike bir araç tahsis edilir ve sadece sizin ürünlerinizi taşır.</p>
                    </div>
                    <div className={styles.gridCard}>
                        <img src="/services/card6.png" alt ="Onek Resim"></img>
                        <h1>Büyük Araç Teslimatı</h1>
                        <p>Kamyon/Tır bazında tüm Türkiye&apos;ye ürünlerinizi gönderebilirsiniz.</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export  default SecondSection
