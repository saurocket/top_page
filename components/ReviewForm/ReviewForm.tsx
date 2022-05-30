import React, {useState} from 'react';
import {ReviewFormProps} from './ReviewForm.props';
import {JSX} from "@babel/types";
import cn from 'classnames';
import styles from './ReviewForm.module.css';
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Rating from "../Rating/Rating";
import Button from "../Button/Button";
import Htag from "../Htag/Htag";
import P from '../P/P';
import CloseIcon from './close.svg';
import {useForm, Controller} from "react-hook-form";
import {IReviewForm, IReviewSendResponse} from "./ReviewForm.interface";
import axios from "axios";
import { API } from '../../helpers/API';


const ReviewForm: React.FC<ReviewFormProps> = ({productid, isOpened,className, ...props}): JSX.Element => {

    const {register, control, handleSubmit,reset, formState: {errors}} = useForm<IReviewForm>();
    const [success, setSuccess] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const onSubmit = async (formData: IReviewForm) => {
        const sendData = {...formData, productId: productid};

        try {
            setSuccess('');
            setError('');
            setLoading(true);
            const { data } = await axios.post<IReviewSendResponse>(API.review.sendReview, sendData);
            if (data.message) {
                setLoading(false);
                setSuccess(data.message);
                reset();
            } else {
                setError('что-то пошло не так');
                setLoading(false);
            }
        }catch (e) {
            setError(e.message);
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={cn(className)}
            {...props}
        >
            <div className={styles.reviewForm}>
                <Input
                    {...register('name', {required: {value: true, message: 'Заполните имя'}})}
                    error={errors.name}
                    className={styles.name}
                    placeholder="Имя"
                    tabIndex={isOpened ? 0 : -1}
                />
                <Input
                    {...register('title', {required: {value:true, message: 'Заполните заголовок'}})}
                    error={errors.title}
                    className={styles.title}
                    placeholder="Заголовок отзыва"
                    tabIndex={isOpened ? 0 : -1}
                />
                <div className={styles.rating}>
                    <span>Оценка</span>
                    <Controller
                        name='rating'
                        control={control}
                        rules={{required: {value:true, message: 'Поставьте рейтинг'}}}
                        render={({field})=> (
                            <Rating
                                error={errors.rating}
                                ref={field.ref}
                                rating={field.value}
                                isEditable={true}
                                setRating={field.onChange}
                                tabIndex={isOpened ? 0 : -1}
                            />
                        )}
                    />
                </div>
                <Textarea
                    {...register('description', {required: {value:true, message: 'Отзыв обязателен'}})}
                    className={styles.description}
                    error={errors.description}
                    placeholder="Текст отзыва"
                    tabIndex={isOpened ? 0 : -1}
                />
                <div className={styles.submit}>
                    <Button
                        disabled={loading}
                        className={styles.submitButton}
                        appearance="primary"
                        arrow="none"
                        tabIndex={isOpened ? 0 : -1}
                    >Отправить</Button>
                    <span
                        className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
            {success && <div className={styles.success}>
                <Htag tag="h4" className={styles.successTitle}>Ваш отзыв отправлен</Htag>
                <CloseIcon
                    onClick={()=> setSuccess('')}
                    className={styles.closeIcon}
                />
                <P size="m" className={styles.successDescription}>Спасибо, ваш отзыв будет отправлен после проверки.</P>
            </div>}
            {error && <div className={styles.error}>
                <Htag tag="h4" className={styles.successTitle}>Ваш отзыв не был отправлен</Htag>
                <CloseIcon
                    onClick={()=> setError('')}
                    className={cn(styles.closeIcon, styles.errorIcon)}
                />
                <P size="m" className={styles.successDescription}>{error}</P>
            </div>}

        </form>
    );
};

export default ReviewForm;
