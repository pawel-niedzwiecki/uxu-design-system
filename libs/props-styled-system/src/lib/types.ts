import {ColorProps} from "./color";
import {SpaceProps} from "./space";
import {GridProps} from "./grid";
import {PositionProps} from "./position";
import {TypographyProps} from "./typography";
import {ShadowProps} from "./shadow";
import {SizeProps} from "./size";
import {VectorProps} from "./vector";
import {Theme} from "@uxu/design-system";
import {ObjectMapType} from "@uxu/types";


export type ConfigArgType = {
  scale?: string;
  property: string;
  variable?: { prefix: string };
};


export type ConfigArgsType = ObjectMapType<ConfigArgType>;

<<<<<<< HEAD
export type PropsType =
  ColorProps
  | SpaceProps
  | GridProps
  | PositionProps
  | TypographyProps
  | ShadowProps
  | SizeProps
  | VectorProps
  | Theme;


=======
export type PropsType = ColorProps | SpaceProps | GridProps | PositionProps | TypographyProps | ShadowProps | Theme;
>>>>>>> 6c29f7a (feat: add config for shadow (#16))
