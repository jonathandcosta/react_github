import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Graduando em Ciência da Computação e certificado como Engenheiro Frontend pela EBAC - British School. Tenho expertise em resolução de problemas com tecnologia, gestão de projetos e equipes, análise de dados e desempenho, Business Intelligence, Marketing e análise de tráfego pago e comunicação clara. Como Desenvolvedor Frontend desde 2021, possuo experiência em HTML5 responsivo, semântico, com técnicas de acessibilidade e SEO, CSS3, Bootstrap, Tailwind, LESS, SASS, BEM, pré-processadores SCSS, JavaScript, JQuery, ReactJS, Typescript, VueJS, React Native, Grunt, Gulp, Parcel, Ajax, Redux, Cypress, YUP, ferramentas de build JEST, ferramentas de controle de versão Git, Github, consumo de APIs, metodologias ágeis, plataforma de E-commerce VTEX, Winthor ERP - TOTVS;
    </Paragrafo>
    <GithubSecao>
      <div>
        <img height="180em" src="https://github-readme-stats.vercel.app/api?username=jonathandcosta&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=jonathandcosta&layout=compact&langs_count=7&theme=dracula" />
      </div>
    </GithubSecao>
  </section >
)

export default Sobre
