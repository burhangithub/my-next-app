import styles from "../../styles/services/FirstSection.module.css";
import React from "react";

const  FirstSection= () => {
    return (
        <section className={styles.firstSection}>
            <div className={styles.firstContainer}>
                <h1>Hizmetlerimiz</h1>
                <p> MDN Lojistik sadece İstanbul&apos;da hizmet vermektedir.
                    Motorlu teslimat, minibüs, kamyonet, kamyon tipi araçların tamamı ile kompakt bir hizmet sunar.</p>
            </div>
        </section>
    )
};

export  default FirstSection
