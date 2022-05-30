import React from 'react';
import {ButtonProps} from "./Button.props";
import styles from './Button.module.css';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';
import {motion, useMotionValue} from 'framer-motion'

const Button:React.FC<ButtonProps> = ({appearance,
                                          arrow= 'none',
                                          className,
                                          children,...props}):JSX.Element => {
    const scale = useMotionValue(1);
    return (
        <motion.button
            style={{scale}}
            whileHover={{ scale: 1.05}}
            className={cn(className, styles.button,{
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost'
        })}
            {...props}
        >
            {children}
            {arrow !== 'none' && <span className={cn(styles.arrow, {
                [styles.arrowDown]: arrow === 'down'
            })}>
                <ArrowIcon/>
            </span>}
        </motion.button>
    );
};

export default Button;
