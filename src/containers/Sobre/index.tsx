import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
  <Paragrafo tipo="principal">
      Olá, sou Jonathan D Costa, desenvolvedor frontend apaixonado por criar experiências digitais impactantes e escaláveis.
  </Paragrafo>
<br/>
  <Paragrafo tipo="principal">
      Sou formando em Ciência da Computação (dez 2025) e certificado como Engenheiro Frontend pela EBAC - British School. Possuo expertises técnicas em resolução de problemas com a tecnologia, sou desenvolvedor Frontend desde 2021 apaixonado por criar interfaces modernas, acessíveis e centradas no usuário. Com domínio em ReactJS, NextJs, VueJS, JavaScript ES6, TypeScript, HTML5, CSS3, Tailwind, Styled-Components, Jest, Git, e metodologias ágeis, entrego soluções responsivas, escaláveis e com foco em performance.
  </Paragrafo>
<br/>
  <Paragrafo tipo="secundario">
   As minhas experiências inclui desenvolvimento de landing pages, sistemas web e e-commerces, com integração de APIs, ferramentas de testes e versionamento. Recentemente inclui em meu portifólio dois projetos de grande impacto, são eles; Dogs que é uma rede social para pets feita com React consumindo dados de uma API e um sistema de análise de dados com gráficos em TypeScript e muitos outros projetos.
   </Paragrafo>
<br/>
  <Paragrafo tipo="secundario">
  Em meu desenvolvimento me destaco por ser comprometido com a qualidade do código, boas práticas e performance em todos, busco oportunidades para colaborar e escalar negócios com soluções front-end eficientes.
  </Paragrafo>
<br/>
  <Paragrafo tipo="secundario">
     Conecte-se comigo ou explore meu portfólio para ver como posso ajudar!
  </Paragrafo>
<br/>
  <Paragrafo tipo="secundario">🚀 Aberto a novas oportunidades para criar soluções inovadoras no desenvolvimento frontend!</Paragrafo>
<br/>
📌Portfólio:<a href="https://jonathandcosta.github.io/" target="_blank" rel="noopener noreferrer"> https://jonathandcosta.github.io/</a>

    <GithubSecao>
      <div>
        <img height="180em" src="https://github-readme-stats.vercel.app/api?username=jonathandcosta&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=jonathandcosta&layout=compact&langs_count=7&theme=dracula" />
      </div>
    </GithubSecao>
  </section >
)

export default Sobre
