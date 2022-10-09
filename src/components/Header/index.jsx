import { icons } from "../../constants/index.js";
import {
  HeaderContainer,
  HeaderLink,
  LinkedList,
  Logo,
} from "./index.styles.js";

export function Header() {
  return (
    <HeaderContainer>
      <Logo href="/">
        <img src={icons.SportSeeLogo} alt="SportSee" />
      </Logo>

      <nav>
        <LinkedList>
          <li>
            <HeaderLink href="/">Accueil</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/">Profil</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/">Réglages</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/">Communauté</HeaderLink>
          </li>
        </LinkedList>
      </nav>
    </HeaderContainer>
  );
}
