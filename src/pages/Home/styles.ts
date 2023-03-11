import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  nav {
    a {
      text-decoration: none;
    }
  }
`

export const ContainerChallenge = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;
`

export const Challenge = styled.div`
  background: ${(props) => props.theme['green-500']};
  padding: 1.5rem 2rem;
  border-radius: 6px;
  color: ${(props) => props.theme['gray-100']};

  &:hover {
    background: ${(props) => props.theme['green-300']};
    transition: 0.5s ease-in-out;
  }
`
