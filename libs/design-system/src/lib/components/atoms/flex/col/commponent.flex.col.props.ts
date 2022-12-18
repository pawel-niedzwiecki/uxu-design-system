import {FC} from 'react';
import {Breakpoints} from 'theme';
import {ColorProps, BorderProps , ShadowProps} from '@uxu/props-styled-system'
import {FunctionComponentDiv, MarkAsNumberNotRequired} from '@uxu/types';


export type Props = FC<FunctionComponentDiv & MarkAsNumberNotRequired<Breakpoints> & ColorProps & BorderProps & ShadowProps>
