import styles from "../../styles/home/SecondSection.module.css";
import React from "react";

const SecondSection =  () =>{


    return (
        <section className={styles.secondSection}>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.cardInfo}>
                        <img src="/home/card1.png" alt="Card1"/>
                        <h3> AYNI GÜN TESLİMAT</h3>
                    </div>
                    <p>
                        İstanbul&apos;un yoğun trafiğine rağmen,
                        paketlerinizi hızlı bir şekilde istediğiniz adrese ulaştırıyorum.
                        Siz sipariş verin, gerisini bana bırakın.
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardInfo} >
                        <img src="/home/card2.png" alt="Card1" />
                        <h3>GÜVENLİ NAKLİYE</h3>
                    </div>
                    <p>
                        Paketlerinizin güvenliği benim için önceliklidir.
                        Ürünlerinizin zarar görmeden teslim edilmesini garanti ediyorum.
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardInfo}>
                        <img src="/home/card3.png" alt="Card1"/>
                        <h3> EKONOMİK FİYATLAR</h3>
                    </div>
                    <p>
                        Kaliteli hizmeti uygun fiyatlarla sunuyorum.
                        İstanbul içinde en ekonomik kargo hizmeti için doğru adrestesiniz.
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardInfo}>
                        <img src="/home/card4.png" alt="Card1"/>
                        <h3> KAPIDAN KAPIYA NAKLİYE</h3>
                    </div>
                    <p>
                        Evden çıkmadan kargo gönderimi yapmak mı istiyorsunuz?
                        Gönderilerinizi adresinizden alıp istediğiniz yere teslim ediyorum.
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardInfo}>
                        <img src="/home/card5.png" alt="Card1"/>
                        <h3> ŞEHİRLER ARASI ACİL GÖNDERİM</h3>
                    </div>
                    <p>
                        Belge, paket veya önemli ürünlerinizi,
                        şehirler arası acil gönderim hizmetimizle hızla ve güvenle teslimatınızı gerçekleştiriyoruz.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default SecondSection
