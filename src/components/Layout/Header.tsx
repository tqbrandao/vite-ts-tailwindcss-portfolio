import logo from "../../assets/logo/logo-header-final-centro.png";
import NavLink from "../UI/NavLink";
import { textContent } from "../../data/text-content.js";
import LanguageSwitch from "../UI/LanguageSwitch.js";

function Header() {
  return (
    <header className="relative flex items-center justify-around h-24 py-0 bg-blue-300 px-14">
      <a href="#">
        <img src={logo} className="h-16"></img>
      </a>
      <nav>
        <ul className="flex items-center gap-24 list-none ">
          {textContent.pt.navigation.map((linkText: string, idx: number) => {
            return <NavLink text={linkText} key={idx} />;
          })}
          <LanguageSwitch />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
