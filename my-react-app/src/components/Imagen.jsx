import PropTypes from "prop-types";

function Imagen({ src, alt,className }) {
  return (
    
      <a href="#" className={className}>
        <img src={src} alt={alt} />
      </a>

  );
}

Imagen.propTypes = {
  src: PropTypes.string.isRequired, // `src` es requerido y debe ser una cadena
  alt: PropTypes.string, // `alt` es opcional y debe
  className: PropTypes.string.isRequired,
};

export default Imagen;
