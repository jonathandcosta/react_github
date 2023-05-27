import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae fuga corporis dolorum eos recusandae voluptas libero excepturi voluptatem ducimus cupiditate repudiandae sequi, tempora illo assumenda ad et dolore atque sint.
    </Paragrafo>
    <GithubSecao>
      <div>
        <img height="180em" src="https://github-readme-stats.vercel.app/api?username=jonathandcosta&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
        <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=jonathandcosta&layout=compact&langs_count=7&theme=dracula"/>
      </div>
    </GithubSecao>
  </section>
)

export default Sobre
