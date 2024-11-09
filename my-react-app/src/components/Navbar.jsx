// import PropTypes from 'prop-types';
import Imagen from "./Imagen";

function Navbar() {
  return (
    <div className="navbar">
      <Imagen
        src="/src/assets/discord-logo-white.png"
        alt="Logo" className="logo"
      />
      <Imagen src="/src/assets/menu-icon.png" alt="#"className="hamburger"/>
    </div>
  );
}
export default Navbar;
