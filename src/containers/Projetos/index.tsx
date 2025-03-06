import { useEffect, useState } from "react"
import Projeto from "../../components/Projeto"
import Titulo from "../../components/Titulo"

import { Lista } from "./styles"

interface Repositorio {
  id: number;
  name: string;
  description: string;
  html_url: string;
}



const Projetos = () => {

  const [repositorio, setRepositorio] = useState<Repositorio[]>([]);


  useEffect(() => {
    const buscaRepositorio = async () => {
      const response = await fetch('https://api.github.com/users/jonathandcosta/repos')
      const data = await response.json()
      setRepositorio(data)
    }
    buscaRepositorio()
  }, [])

  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
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
