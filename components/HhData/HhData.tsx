import React from 'react';
import {HhDataProps} from './HhData.props';
import {JSX} from "@babel/types";
import styles from './HhData.module.css';
import Card from "../Card/Card";
import StarIcon from './star.svg'
import {priseRu} from '../../helpers/helpers';

const HhData: React.FC<HhDataProps> = ({
                                           count,
                                           juniorSalary,
                                           middleSalary,
                                           seniorSalary,
                                       }): JSX.Element => {
    return (
        <div className={styles.hh}>
            <Card color="white" className={styles.count}>
                <p className={styles.title}>Число вакансий</p>
                <p className={styles.countValue}>{count}</p>
            </Card>
            <Card color="white" className={styles.salary}>
                <div>
                    <p className={styles.title}>Начальный</p>
                    <p className={styles.salaryValue}>{priseRu(juniorSalary)}</p>
                    <div className={styles.rate}>
                        <StarIcon className={styles.filled}/>
                        <StarIcon/>
                        <StarIcon/>
                    </div>
                </div>
                <div>
                    <p className={styles.title}>Средний</p>
                    <p className={styles.salaryValue}>{priseRu(middleSalary)}</p>
                    <div className={styles.rate}>
                        <StarIcon className={styles.filled}/>
                        <StarIcon className={styles.filled}/>
                        <StarIcon/>
                    </div>
                </div>
                <div>
                    <p className={styles.title}>Профессионал</p>
                    <p className={styles.salaryValue}>{priseRu(seniorSalary)}</p>
                    <div className={styles.rate}>
                        <StarIcon className={styles.filled}/>
                        <StarIcon className={styles.filled}/>
                        <StarIcon className={styles.filled}/>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default HhData;
