import React from 'react';
import {SidebarProps} from "./Sidebar.props";
import Menu from "../Menu/Menu";
import SearchCourse from "../../components/SearchCourse/SearchCourse";
import Logo from '../logo.svg'
import cn from 'classnames'
import styles from './Sidebar.module.css'

const SideBar:React.FC<SidebarProps> = ({className,...props}):JSX.Element => {
    return (
        <div
            className={cn(className, styles.sidebar)}
            {...props}
        >
            <Logo className={styles.logo}/>
            <SearchCourse/>
           <Menu/>
        </div>
    );
};

export default SideBar;
