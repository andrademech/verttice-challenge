import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme['green-300']};

  nav:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem;

    justify-content: center;
    align-items: center;

    a {
      width: auto;
      text-decoration: none;
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['green-300']};

      border-top: 0.25px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
        transition: border-bottom 0.5s;
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
        transition: border-bottom 0.5s;
      }
    }
  }
`
