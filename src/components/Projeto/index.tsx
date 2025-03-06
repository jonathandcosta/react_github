import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";

import { Card, LinkBotao } from "./styles";


interface ProjetoProps {
  name: string;
  description: string;
  html_url: string;
}

const Projeto: React.FC<ProjetoProps> = ({ name, description, html_url }) => (
  <Card>
    <Titulo>{name}</Titulo>
    <Paragrafo tipo="secundario">{description}</Paragrafo>
    <LinkBotao href={html_url}>Visualizar</LinkBotao>
  </Card>
);

export default Projeto;
