import React from 'react';
import { DividerProps } from './Divider.props';
import {JSX} from "@babel/types";
import cn from 'classnames';
import styles from './Divider.module.css';

const Divider:React.FC<DividerProps> = ({className, ...props}):JSX.Element => {
    return (
       <hr className={cn(className, styles.divider)} {...props}/>
    );
};

export default Divider;
