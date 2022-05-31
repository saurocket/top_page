import React, {useState, useRef, forwardRef, ForwardedRef} from 'react';
import {ProductProps} from './Product.props';
import {JSX} from "@babel/types";
import cn from 'classnames';
import styles from './Product.module.css';
import Card from "../Card/Card";
import Htag from "../Htag/Htag";
import Rating from "../Rating/Rating";
import Tag from '../Tag/Tag';
import Button from "../Button/Button";
import {declOfNum, priseRu} from "../../helpers/helpers";
import Divider from "../Divider/Divider";
import Image from 'next/image';
import Review from '../Reviw/Review';
import ReviewForm from '../ReviewForm/ReviewForm';
import {motion} from 'framer-motion';




const Product = motion(forwardRef(({product, className}:ProductProps, ref:ForwardedRef<HTMLLIElement>): JSX.Element => {

    const reviewRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState<boolean>(false);
    const src = process.env.NEXT_PUBLIC_DOMAIN + product.image;
    const variants = {
        visible: {opacity: 1, height: 'auto'},
        hidden: { opacity: 0, height: 0}
    };

    const handleScrollToElement = () => {
        setOpen(true);
         reviewRef?.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        reviewRef && reviewRef.current.focus();
    };
    return (
        <li className={cn(className)} ref={ref}>
            <Card color="white" className={styles.product}>
                <div className={styles.logo}>
                    <Image
                        loader={() => src}
                        src={src}
                        alt={product.title}
                        width={70}
                        height={70}
                    />
                </div>
                <div className={styles.title}>
                    <Htag tag="h3">{product.title}</Htag>
                </div>
                <div className={styles.price}>
                    {priseRu(product.price)}
                    {product.oldPrice && <Tag
                        className={styles.oldPrise}
                        color="green" size="s"
                    >
                        {priseRu(product.oldPrice - product.price)}
                    </Tag>
                    }
                </div>
                <div className={styles.credit}>{priseRu(product.credit)}<span>/месяц</span></div>
                <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
                <div className={styles.tags}>
                    {product.categories.map(c => (
                        <Tag
                            key={c}
                            className={styles.tag}
                            size="s"
                            color="ghost"
                        >
                            {c}
                        </Tag>
                    ))}
                </div>
                <div className={styles.priseTitle}>Цена</div>
                <div className={styles.creditTitle}>кредит</div>
                <div className={styles.rateTitle}>
                    <a
                        href="#ref"
                        onClick={handleScrollToElement}
                    >
                        {product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
                    </a>
                </div>
                <Divider className={styles.hr}/>
                <p className={styles.description}>{product.description}</p>
                <ul className={styles.feature}>
                    {product.characteristics.map(c => (
                        <li key={c.name} className={styles.characteristics}>
                            <Htag tag='h4' className={styles.characteristicsName}>{c.name}</Htag>
                            <span className={styles.dots}/>
                            <span className={styles.characteristicsValue}>{c.value}</span>
                        </li>
                    ))}
                </ul>
                <ul className={styles.advBlock}>
                    {product.advantages && <li className={styles.advantages}>
                        <Htag tag="h4">Преимущества</Htag>
                        <p className={styles.description}>{product.advantages}</p>
                    </li>}
                    {product.disadvantages && <li className={styles.disadvantages}>
                        <Htag tag="h4">Недостатки</Htag>
                        <p className={styles.description}>{product.disadvantages}</p>
                    </li>}
                </ul>
                <Divider className={(cn(styles.hr, styles.hr2))}/>
                <div className={styles.actions}>
                    <Button appearance="primary" arrow="none">Узнать подробнее</Button>
                    <Button
                        className={styles.reviewButton}
                        appearance="ghost"
                        arrow={open ? 'down' : 'right'}
                        onClick={() => setOpen(!open)}
                    >
                        Читать отзывы
                    </Button>

                </div>
            </Card>
            <motion.div
                animate={open ? 'visible' : 'hidden'}
                variants={variants}
                initial="hidden"
            >
                <Card
                    ref={reviewRef}
                    color="blue"
                    className={styles.reviews}
                    tabIndex={open ? 0 : -1}
                >
                    {product.reviews.map(r => (
                        <Review key={r._id} review={r}/>
                    ))}
                    <Divider/>
                    <ReviewForm
                        isOpened={open}
                        productid={product._id}
                    />
                </Card>
            </motion.div>

        </li>
    );
}));

export default Product;


