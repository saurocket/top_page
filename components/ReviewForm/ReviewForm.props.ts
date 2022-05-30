import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface ReviewFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>,HTMLFormElement>{
  productid: string
  isOpened: boolean
}
