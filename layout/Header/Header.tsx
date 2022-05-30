import React, {useEffect, useState} from 'react';
import {HeaderProps} from "./Header.props";
import Logo from '../logo.svg';
import cn from 'classnames'
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon";
import style from './Header.module.css'
import {motion} from 'framer-motion'
import SideBar from "../Sidebar/SideBar";
import {useRouter} from "next/router";


const Header:React.FC<HeaderProps> = ({className,...props}):JSX.Element => {
    const router = useRouter()

    useEffect(() => {
        setOpen(false)
    },[router])


    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => {
        setOpen(!open)
    }
    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {stiffness: 20}
        },
        closed: {
            opacity: 0,
            x: '100%'
        }

    }
    return (
        <header
            className={cn(className, style.header)}
            {...props}
        >
        <Logo/>
        <ButtonIcon
            className={style.button}
            icon={open ? "close" : "open"}
            appearance="white"
            onClick={handleOpen}
        />
        <motion.div
            variants={variants}
            initial="closed"
            animate={open ? "opened" : "closed"}
            className={style.mobileSideBar}
        >
            <SideBar/>
        </motion.div>
        </header>
    );
};

export default Header;
