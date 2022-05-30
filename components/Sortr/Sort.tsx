import React, {KeyboardEvent, useRef} from 'react';
import {SortEnum, SortProps} from './Sort.props';
import {JSX} from "@babel/types";
import SortIcon from './sort.svg';
import cn from 'classnames';
import styles from './Sort.module.css';

const Sort: React.FC<SortProps> = ({sort, setSort, isProducts, className, ...props}): JSX.Element => {

    const priceRef = useRef<HTMLButtonElement>(null);
    const ratingRef = useRef<HTMLButtonElement>(null);


    const onKeyDownChange = (e: KeyboardEvent, type: SortEnum) => {
        if (e.code === 'Enter' || e.code === 'Space') {
            setSort(type);
        }
        if (e.code === 'ArrowUp' || e.code === 'ArrowDown' || e.code === 'ArrowRight' || e.code === 'ArrowLeft') {
            e.preventDefault();
            type === SortEnum.Price ? ratingRef.current.focus() : priceRef.current.focus();
        }
    };


    return (
        <div
            className={cn(className, styles.sort)}
            {...props}
        >
        <button
            tabIndex={isProducts ? 0 : -1}
            ref={ratingRef}
            onKeyDown={(e) => onKeyDownChange(e, SortEnum.Rating)}
            onClick={() => setSort(SortEnum.Price)}
            className={cn(styles.sortWrapper, {
                [styles.active]: sort === SortEnum.Rating
            })}
        >
            <SortIcon className={styles.sortIcon}/>По рейтингу
        </button>
            <button
                tabIndex={isProducts ? 0 : -1}
                ref={priceRef}
                onKeyDown={(e) => onKeyDownChange(e, SortEnum.Price)}
                onClick={() => setSort(SortEnum.Rating)}
                className={cn(styles.sortWrapper, {
                    [styles.active]: sort === SortEnum.Price
                })}
            >
            <SortIcon className={styles.sortIcon}/>По цене
        </button>
        </div>
    );
};

export default Sort;
