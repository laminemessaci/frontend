import SportSeeLogo from "../../assets/logo.svg";
import "./style.css";

export function Header() {
  return (
    <header>
      <a href="/">
        <img src={SportSeeLogo} alt="SportSee" />
      </a>

      <nav>
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/">Profil</a>
          </li>
          <li>
            <a href="/">Réglages</a>
          </li>
          <li>
            <a href="/">Communauté</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
