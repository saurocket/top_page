import React, {useState} from "react";
import Button from "../components/Button/Button";
import Htag from "../components/Htag/Htag";
import Tag from "../components/Tag/Tag";
import Rating from "../components/Rating/Rating";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";
import Input from "../components/Input/Input";
import Textarea from "../components/Textarea/Textarea";
import {API} from "../helpers/API";

function Home({menu,firstCategory}:HomeProps):JSX.Element {
    const [rating, setRating] = useState<number>(4)
  return (
   <>
       <Htag tag={"h1"}>Текст</Htag>
        <Button appearance="primary" arrow="down">Primary</Button>
        <Button appearance="ghost" arrow="right">Secondary</Button>
       <Tag color="primary" size="m">Хуета</Tag>
       <Tag color="green" size="s">Хуета</Tag>
       <Tag color="ghost" size="m">Хуета</Tag>
        <Rating rating={rating} isEditable={true} setRating={setRating}/>
       <ul>
           {menu.map(m => <li key={m._id.secondCategory}>{m._id.secondCategory}</li>) }
       </ul>
       <Input placeholder="dfdfdf"/>
       <Textarea placeholder="textarea"/>
   </>
  );
}

export default withLayout(Home)


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find,{
        firstCategory
    });

    return {
        props:{
            menu,
            firstCategory
        }
    }
}

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[]
    firstCategory:number
}
