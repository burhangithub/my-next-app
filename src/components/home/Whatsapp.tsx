import styles from "../../styles/home/Whatsapp.module.css";
import React, {useRef, useState} from "react";

export  const  Whatsapp= () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (isPlaying &&  audio !== null) {
            // @ts-ignore
            audio.pause();
        } else {
            // @ts-ignore
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <div  className={styles.wpContainer}>
            <a
                href="https://wa.me/+905523407934"
                target="_blank"
                className="whatsapp-icon"
                id = {styles.wpButton}
            >
                <i className="fa-brands fa-whatsapp"></i>
            </a>
        </div>
    )
};

export  default Whatsapp
