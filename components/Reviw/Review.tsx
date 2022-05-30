import React from 'react';
import { ReviewProps } from './Review.props';
import {JSX} from "@babel/types";
import cn from 'classnames';
import styles from './Review.module.css';
import UserIcon from './user.svg'
import Htag from "../Htag/Htag";
import {format} from 'date-fns'
import {ru} from 'date-fns/locale'
import Rating from "../Rating/Rating";

const Review:React.FC<ReviewProps> = ({review,className, ...props}):JSX.Element => {
    return (
        <div className={cn(styles.review, className)}
           {...props}
        >
            <UserIcon className={styles.user}/>
            <div className={styles.header}>
                <Htag tag="h5" className={styles.name}>{review.name}:</Htag>
                <span>{review.title}</span>
            </div>
            <div className={styles.date}>
                {format(new Date(review.createdAt), 'dd MMMM yyyy', {locale: ru})}
            </div>
            <div className={styles.rating}>
                <Rating rating={review.rating}/>
            </div>
            <p className={styles.description}>
                {review.description}
            </p>

        </div>
    );
};

export default Review;
