import styled from 'styled-components'

export const Header = styled.header`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${(props) => props.theme['gray-100']};
  gap: 2rem;
  p {
    max-width: 40rem;
    text-align: justify;
  }
`

export const Container = styled.main`
  margin-top: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  strong {
    color: ${(props) => props.theme['green-500']};
    font-size: 1.5rem;
    &:hover {
      color: ${(props) => props.theme['green-300']};
      cursor: pointer;
    }
  }
`

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;

  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  label {
    display: flex;
    gap: 1rem;

    button {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      border: 0;
      padding: 0 1rem;
      background: transparent;
      border: 1px solid ${(props) => props.theme['green-300']};
      color: ${(props) => props.theme['green-300']};
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;

      &:hover {
        background: ${(props) => props.theme['green-500']};
        border-color: ${(props) => props.theme['green-500']};
        color: ${(props) => props.theme.white};
        transition: background-color 0.2s, color 0.2, border-color 0.2s;
      }
    }
  }
`
const BaseInput: any = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
    transition: border-color 0.5s;
  }
`

export const FormInput = styled(BaseInput)`
  flex: 1; // flew grow, flex shrink, flex basis

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const Output = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['gray-900']};
  display: flex;
  flex-direction: column;

  gap: 1rem;
  width: 100%;
  max-width: 700px;
  justify-content: center;
  padding-bottom: 2rem; // Adiciona margem inferior

  overflow-y: auto; // Adiciona barra de rolagem

  ul {
    border-radius: 8px;
    list-style: none;
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme['gray-900']};
    padding-top: 1rem;

    gap: 1rem;
    overflow-y: auto; // Adiciona barra de rolagem
    max-height: 165px; // Define altura máxima
    padding: 0 1rem; // Adiciona espaçamento horizontal

    li {
      width: 180px;
    }
  }
  ul::-webkit-scrollbar {
    width: 0;
  }
`
