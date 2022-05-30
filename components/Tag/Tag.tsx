import React from 'react';
import {TagProps} from './Tag.props';
import {JSX} from "@babel/types";
import cn from 'classnames';
import styles from './Tag.module.css';

const Tag: React.FC<TagProps> = ({
                                     size = 's',
                                     children,
                                     color = 'ghost',
                                     href,
                                     className, ...props
                                 }): JSX.Element => {
    return (
        <div
            className={cn(className,styles.tag, {
                [styles.s]: size === 's',
                [styles.m]: size === 'm',
                [styles.ghost]: color === 'ghost',
                [styles.red]: color === 'red',
                [styles.primary]: color === 'primary',
                [styles.gray]: color === 'gray',
                [styles.green]: color === 'green',
            })}
            {...props}
        >
            {
                href ? <a href={href}>{children}</a>
                    : <>{children}</>
            }
        </div>
    );
};

export default Tag;
