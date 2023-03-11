// Styles, Logo & Icons
import { HeaderContainer } from './styles'
import { GithubLogo, LinkedinLogo, InstagramLogo, House } from 'phosphor-react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <Link
          to="https://www.vertticegr.com.br/"
          title="verttice site"
          rel="noreferrer"
          target="_blank"
        >
          <h2>Verttice challenge</h2>
        </Link>

        <Link to="/" title="home">
          <House size={32} />
        </Link>
      </nav>

      <nav>
        <h4>Made by: Herberth Andrade</h4>
        <a
          href="https://github.com/andrademech"
          title="github"
          rel="noreferrer"
          target="_blank"
        >
          <GithubLogo size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/herberth-andrade-759b10127/"
          title="linkedin"
          rel="noreferrer"
          target="_blank"
        >
          <LinkedinLogo size={32} />
        </a>
        <a
          href="https://www.instagram.com/herberth.dev/"
          title="instagram"
          rel="noreferrer"
          target="_blank"
        >
          <InstagramLogo size={32} />{' '}
        </a>
      </nav>
    </HeaderContainer>
  )
}
