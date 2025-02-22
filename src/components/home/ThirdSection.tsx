import styles from "../../styles/home/ThirdSection.module.css";
import React from "react";


const  ThirdSection= () => {
    return (
        <div className={styles.thirdSection}>
            <div className={styles.sectionInfo}>
                <h2> Modern Araç Filomuzla Her Gönderiniz Güvende</h2>
                <p>Gerek büyük ölçekli gönderileriniz için geniş kapasiteli aracımla,
                    gerekse şehir içi hızlı teslimatlarınız için,
                    her zaman en uygun ve güvenilir taşıma çözümlerini sunuyoruz. Gönderiniz ne olursa olsun,
                    doğru araç ve ekipmanla yanınızdayız.</p>

            </div>
            <div className={styles.sectionImages}>
                <div
                    className={styles.cardImage}
                >
                    <img src="/home/res1.jpeg" alt="as"
                            />
                </div>
                <div
                    className={styles.cardImage}
                >
                    <img src="/home/res2.jpeg" alt="as"

                            />
                </div>
                <div
                    className={styles.cardImage}
                >
                    <img src="/home/transport8.jpg" alt="as"
                           />

                </div>
                <div  className={styles.cardImage}>
                    <img src="/home/transport.jpg" alt="as"
                           />
                </div>
            </div>
        </div>
    )
};

export  default ThirdSection
