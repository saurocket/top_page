import React, {useEffect, useReducer} from 'react';
import {TopPageComponentProps} from './TopPageComponent.props';
import styles from './TopPageComponent.module.css'
import Htag from "../../components/Htag/Htag";
import Tag from "../../components/Tag/Tag";
import HhData from "../../components/HhData/HhData";
import {TopLevelCategory} from "../../interfaces/page.intarface";
import Advantages from "../../components/Advantege/Advantages";
import Sort from "../../components/Sortr/Sort";
import {SortEnum} from "../../components/Sortr/Sort.props";
import {sortReducer} from "../../components/Sortr/sort.reducer";
import Product from "../../components/Product/Product";
import {useScrollY} from "../../hooks/useScrollY";

const TopPageComponent:React.FC<TopPageComponentProps> = ({firstCategory,page,products,...props}):JSX.Element => {

    const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {sort: SortEnum.Rating, products});
    const y  = useScrollY()

    useEffect(() => {
        dispatchSort({type: "reset", initialState: products})
    },[products]);

    const setSort = (sortType:SortEnum) => {
        dispatchSort({type: sortType})
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag="h1">{page.title}  {sortedProducts && <Tag  color="gray" size="m">{sortedProducts.length}</Tag>}</Htag>
                <Sort sort={sort} setSort={setSort} isProducts={!!products.length}/>
            </div>
            <ul>
                {sortedProducts && sortedProducts.map(product => <Product layout key={product._id} product={product}/>)}
            </ul>
            <div className={styles.hhTitle}>
                <Htag tag="h2">Вакансии - {page.category}</Htag>
                <Tag color="red" size="m">hh.ru</Tag>
            </div>
            {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh}/>}
            {page.advantages && page.advantages.length && <Advantages advantageList={page.advantages}/>}
            {page.seoText && <div className={styles.seoText} dangerouslySetInnerHTML={{__html:page.seoText}}/>}
            <Htag tag="h2" >Получаемые навыки</Htag>
            {page.tags.map(t => <Tag key={t} size="s" color="primary">{t}</Tag>)}
        </div>
    );
};

export default TopPageComponent;
