import logo from "../../assets/logo/logo-header-final-centro.png";

function Header() {
  return (
    <header className="relative flex items-center justify-around h-24 py-0 bg-blue-300 px-14">
      <a href="#">
        <img src={logo} className="h-16"></img>
      </a>
      <nav>
        <ul>
          <li>
            <a></a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
