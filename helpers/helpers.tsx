import {IFirstLevelMenuItem} from "../interfaces/menu.interface";
import CoursesIcon from "./image/courses.svg";
import {TopLevelCategory} from "../interfaces/page.intarface";
import ServicesIcon from "./image/services.svg";
import BooksIcon from "./image/books.svg";
import ProductIcon from "./image/products.svg";
import React from "react";


export const firstLevelMenu: IFirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services},
    {route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books},
    {route: 'products', name: 'Товары', icon: <ProductIcon/>, id: TopLevelCategory.Products}
];

export const priseRu = (prise:number): string => {
    return prise
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
        .concat(' ₴');
}
export const declOfNum = (count: number, titles: [string, string, string]):string => {
    const cases = [2, 0, 1, 1, 1, 2 ]
    return titles[(count % 100 > 4 && count % 100 <  20) ? 2 : cases[(count % 10 < 5) ? count % 10 : 5] ];
}
