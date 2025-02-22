import styles from "../../styles/home/Header.module.css";
import React, {useRef, useState} from "react";

const  Header= () => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
            <div className={styles.headerContainer}>

                { !isOpen ? <>
                        <a href="/"><img src="/home/logo.png" alt ="Onek Resim" ></img></a>
                        <nav className={styles.navbar}>
                            <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
                                <div className={styles.bar}></div>
                                <div className={styles.bar}></div>
                                <div className={styles.bar}></div>
                            </div>
                        </nav>
                </>: <div className={styles.isMobileDiv}> </div>
                }
                <ul className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
                    <a href="/"><li>ANASAYFA</li></a>
                    <span></span>
                    <a href="/services"><li>HİZMETLER</li></a>
                </ul>
            </div>
    )
};

export  default Header
