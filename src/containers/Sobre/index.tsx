import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Computer Science graduate and certified as a Frontend Engineer by EBAC - British School. I have expertise in problem-solving with technology, Project and team management, Data and performance analysis, Business Intelligence, Marketing and paid traffic analysis, and clear communication.

      As a Frontend Developer since 2021, I have experience in responsive, semantic HTML5, with accessibility and SEO techniques, CSS3, Bootstrap, Tailwind, LESS, SASS, BEM, SCSS preprocessors, JavaScript, JQuery, ReactJS, Typescript, VueJS, React Native, Grunt, Gulp, Parcel, Ajax, Redux, Cypress, YUP, JEST build tools, Git version control tools, Github, API consumption, Agile methodologies, VTEX E-commerce platform, Winthor ERP - TOTVS;
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
