import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"

import { Descricao, BotaoTema, SidebarContainer } from "./styles"

type Props = {
  trocaTema: () => void;
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Jonathan D Costa</Titulo>
      <Paragrafo tipo="secundario">jonathandcosta</Paragrafo>
      <Descricao tipo="principal" fontSize={12}>Engenheiro Front-end</Descricao>
      <BotaoTema onClick={props.trocaTema}>trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
