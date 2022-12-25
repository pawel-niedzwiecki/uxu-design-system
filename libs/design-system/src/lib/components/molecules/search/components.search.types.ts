import {FC} from "react";
import {FunctionComponentDiv, MarkAsNumberNotRequired} from '@uxu/types';


export type Res = { title: string, slug: string, excerpt?: string, cover: string }
export type ResData = Res[]

export type SpecialProps = {
  callBack?: (query: string) => void,
  res?: {
    data: ResData
    query: string
  }
}


export type Props = FC<FunctionComponentDiv & SpecialProps>;
