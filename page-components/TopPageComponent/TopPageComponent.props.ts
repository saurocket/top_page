import {TopLevelCategory, TopPageModel} from "../../interfaces/page.intarface";
import {ProductModel} from "../../interfaces/product.interface";


export interface TopPageComponentProps{
    firstCategory:TopLevelCategory,
    page: TopPageModel
    products: ProductModel[]
}
