import React, {ForwardedRef, forwardRef} from 'react';
import { InputProps } from './Input.props';
import {JSX} from "@babel/types";
import cn from 'classnames';
import styles from './Input.module.css';

const Input = forwardRef( ({className,error, ...props}:InputProps, ref:ForwardedRef<HTMLInputElement>):JSX.Element => {
    return (
        <div className={cn(styles.inputWrapper, className)}>
            <input
                ref={ref}
                className={cn(styles.input, {
                    [styles.error]: error
                })}
                {...props}
            />
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>

    );
});

export default Input;
