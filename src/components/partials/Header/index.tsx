import netflixLogo from '../../../assets/Netflix_2015_logo.svg';
import netflixPerfil from '../../../assets/perfil.png';

import './styles.css';

interface IHeader {
  black: boolean;
}

export const Header = ({ black }: IHeader) => {
  return (
    <header className={black ? 'black' : ''}>
      <a className="header--logo" href="/">
        <img src={netflixLogo} alt="Logo Netflix" />
      </a>
      <a className="header--user" href="">
        <img src={netflixPerfil} alt="Usuário" />
      </a>
    </header>
  );
};
