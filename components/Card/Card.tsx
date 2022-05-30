import React, {ForwardedRef, forwardRef} from 'react';
import { CardProps } from './Card.props';
import {JSX} from "@babel/types";
import cn from 'classnames';
import styles from './Card.module.css';

const Card = forwardRef(({color='white',children,className, ...props}:CardProps, ref:ForwardedRef<HTMLDivElement>):JSX.Element => {
    return (
        <div
            ref={ref}
            className={cn(styles.card, className, {
            [styles.blue]: color === 'blue',
        })}
           {...props}
        >
            {children}
        </div>
    );
});

export default Card;
