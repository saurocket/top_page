import React, {useEffect} from 'react';
import { UpProps } from './Up.props';
import {JSX} from "@babel/types";
import styles from './Up.module.css';
import {useScrollY} from "../../hooks/useScrollY";
import {useAnimation, motion} from "framer-motion";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

const Up:React.FC<UpProps> = ():JSX.Element => {
    const controls = useAnimation();
    const y = useScrollY();

    useEffect(() => {
        controls.start({opacity: y/document.body.scrollHeight});
    },[y, controls]);


    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
     <motion.div
         animate={controls}
         className={styles.up}
         initial={{opacity: 0}}>
        <ButtonIcon icon="up" appearance="primary" onClick={handleScroll}/>
     </motion.div>
    );
};

export default Up;
