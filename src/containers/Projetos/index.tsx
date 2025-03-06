import { useEffect, useState } from "react"
import Projeto from "../../components/Projeto"
import Titulo from "../../components/Titulo"

import { Lista } from "./styles"

interface Repositorio {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
}



const Projetos = () => {

  const [repositorio, setRepositorio] = useState<Repositorio[]>([]);


  useEffect(() => {
    const buscaRepositorio = async () => {
      const response = await fetch('https://api.github.com/users/jonathandcosta/repos?per_page=100')
      const data = await response.json()

      // Filtra apenas os repositórios que possuem pelo menos uma estrela
      const reposComEstrela = data.filter((repo: { stargazers_count: string | null }) => repo.stargazers_count);

      // Ordena os repositórios por data de criação (created_at)  
      const reposOrdenados = reposComEstrela.sort((a: { created_at: string }, b: { created_at: string }) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      });

      setRepositorio(reposOrdenados)
    }
    buscaRepositorio()
  }, [])

  return (
    <section>
      <Titulo fontSize={16}>Projetos ({repositorio.length.toString()})</Titulo>
      {
        repositorio.length > 0 ? (
          <Lista>
            {
              repositorio.map((repo) => (
                <Projeto
                  key={repo.id}
                  name={repo.name}
                  description={repo.description}
                  html_url={repo.html_url}
                  homepage={repo.homepage}
                />

              ))
            }
          </Lista>
        ) : (
          <p>Carregando projetos do Github</p>
        )
      }
    </section>


  )
}
export default Projetos
