import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";
import up from './up.svg'
import close from './close.svg'
import open from './open.svg'

export const icons = {
    up,
    close,
    open
}

export type IconName = keyof typeof icons

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    icon: IconName
    appearance: 'primary' | 'white'
}
