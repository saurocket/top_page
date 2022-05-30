import React from "react";
import Htag from "../components/Htag/Htag";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";
import {API} from "../helpers/API";

function Home():JSX.Element {
  return (
   <>
       <Htag tag={"h1"}>Выберите  курс</Htag>
   </>
  );
}

export default withLayout(Home);


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
    };
};

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[]
    firstCategory:number
}
