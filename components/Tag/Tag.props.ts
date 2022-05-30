import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    size?: 's' | 'm'
    children: string | number
    color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary'
    href?: string
}
