import logo from "../images/Mesto-logo.svg";
function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Место-логотип" />
    </header>
  );
}

export default Header;