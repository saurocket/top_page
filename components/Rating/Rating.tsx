import React, {useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef, useRef} from 'react';
import {RatingProps} from './Rating.props';
import {JSX} from "@babel/types";
import StarIcon from './Star.svg';
import cn from 'classnames';
import styles from './Rating.module.css';



const Rating = forwardRef(({
                               isEditable = false,
                               rating,
                               error,
                               setRating,
                               tabIndex,
                               ...props
                           }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    const arrayRatingRef = useRef<(HTMLSpanElement | null)[]>([]);

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (<span
                className={cn(styles.star, {
                    [styles.filled]: i < currentRating,
                    [styles.editable]: isEditable,
                })}
                onMouseEnter={() => changeDisplay(i + 1)}
                onMouseLeave={() => changeDisplay(rating)}
                onClick={handleClick}
                tabIndex={computeFocus(rating, i)}
                onKeyDown={handleKey}
                ref={r => arrayRatingRef.current?.push(r)}
            >
                <StarIcon

                />
            </span>);
        });
        setRatingArray(updatedArray);
    };


    useEffect(() => {
        constructRating(rating);
    }, [rating, tabIndex]);

    const computeFocus = (r: number, i: number):number => {
        if(!isEditable) {
            return -1;
        }
        if (!rating && i === 0) {
            return tabIndex ?? 0;
        }
        if (r === i + 1){
            return tabIndex ?? 0;
        }
        return -1;
    };

    const changeDisplay = (i: number) => {
        if (!isEditable) return;
        constructRating(i);
    };
    const handleClick = () => {
        if (!isEditable || !setRating) return;


    };
    const handleKey = (e: KeyboardEvent) => {

        if (e.code === 'ArrowRight' || e.code === 'ArrowUp') {
            e.preventDefault();
            if (!rating) {
                setRating(1);
            }else {
                setRating(rating < 5 ? rating + 1: 5);
                arrayRatingRef.current[rating]?.focus();
            }
        }
        if (e.code === 'ArrowLeft' || e.code === 'ArrowDown') {
            e.preventDefault();
            setRating (rating > 1 ? rating -1 : 1);
            arrayRatingRef.current[rating-2]?.focus();
        }


        if (e.code !== 'Space' || !setRating) return;


        // setRating(i)
    };

    return (
        <div {...props} ref={ref} className={styles.wrapper}>
            {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});

export default Rating;
