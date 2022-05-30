import {TopLevelCategory} from "./page.intarface";

export interface PageItem {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

export interface MenuItem {
    _id: {
        secondCategory: string;
    };
    isOpen?:boolean;
    pages: PageItem[];
}

export interface IFirstLevelMenuItem {
    route:string;
    name:string;
    icon:JSX.Element;
    id:TopLevelCategory
}


