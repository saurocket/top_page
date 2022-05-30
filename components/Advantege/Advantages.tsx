import React from 'react';
import {AdvantagesProps} from './Advantages.props';
import {JSX} from "@babel/types";

import styles from './Advantages.module.css';
import {TopPageAdvantage} from "../../interfaces/page.intarface";
import Htag from "../Htag/Htag";
import CheckedIcon from './checked.svg'
import P from "../P/P";

const Advantages: React.FC<AdvantagesProps> = ({advantageList}): JSX.Element => {
    const Advantage: React.FC<TopPageAdvantage> = ({title, description}): JSX.Element => {
        return <li className={styles.item}>
            <CheckedIcon/>
            <Htag tag="h3">{title}</Htag>
            <hr className={styles.line}/>
            <P size="l">{description}</P>
        </li>
    }

    return (<div className={styles.advantages}>
        <Htag tag="h2">Преимущества</Htag>
        <ul className={styles.list}>
            {advantageList.map(advantage => <Advantage
                key={advantage._id}
                _id={advantage._id}
                title={advantage.title}
                description={advantage.description}
            />)}
        </ul>
    </div>);
};

export default Advantages;
