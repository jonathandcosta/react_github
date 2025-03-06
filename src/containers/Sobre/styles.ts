import styled from 'styled-components'

export const GithubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;

  div {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  img {
    height: 200px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    text-align-last: center;
  }
`
