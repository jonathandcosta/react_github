import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";

import { Card, Butons, LinkBotao } from "./styles";


interface ProjetoProps {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
}

const Projeto: React.FC<ProjetoProps> = ({ name, description, html_url, homepage }) => (
  <Card>
    <Titulo>{name}</Titulo>
    <Paragrafo tipo="secundario">{description}</Paragrafo>
    <Butons>
      <LinkBotao target="_blank" href={html_url}>Visualizar</LinkBotao>
      <LinkBotao target="_blank" href={homepage}>Pagina</LinkBotao>
    </Butons>
  </Card>
);

export default Projeto;
