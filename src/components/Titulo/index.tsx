import { ReactNode } from 'react';
import { Titulo as TituloEstilo } from './styles';

export type Props = {
  children: ReactNode
  fontSize?: number
}

const Titulo = (props: Props) => (
  <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
)

export default Titulo
