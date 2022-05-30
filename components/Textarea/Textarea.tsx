import React, {ForwardedRef, forwardRef} from 'react';
import { TextareaProps } from './Textarea.props';
import {JSX} from "@babel/types";
import cn from 'classnames';
import styles from './Textarea.module.css';

const Textarea = forwardRef(({className,rows= 3,error, ...props}:TextareaProps, ref:ForwardedRef<HTMLTextAreaElement>):JSX.Element => {
    return (
        <div className={cn(styles.textareaWrapper, className)}>
            <textarea
                ref={ref}
                rows={rows}
                className={cn(styles.textarea, {
                    [styles.error]: error
                })}
                {...props}
            />
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});

export default Textarea;
