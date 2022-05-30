import React from 'react';
import { PProps } from './P.props';
import {JSX} from "@babel/types";
import cn from 'classnames';
import styles from './p.module.css';

const P:React.FC<PProps> = ({size='s',children,className, ...props}):JSX.Element => {
    return (
        <p className={cn(styles.p, {
            [styles.s]: size === 's',
            [styles.m]: size === 'm',
            [styles.l]: size === 'l'
        })}
           {...props}
        >
            {children}
        </p>
    );
};

export default P;
