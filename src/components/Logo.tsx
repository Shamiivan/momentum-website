import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/" className="logo-new">
      <img src="/LOGO-NEW.svg" alt="Momentum Management" className="logo-image" />
    </Link>
  );
};

export default Logo;
