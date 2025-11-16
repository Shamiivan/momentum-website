import { Link } from 'react-router-dom'

const Logo = () => {
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we're already on the homepage, scroll to top
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Link to="/" className="logo-new" onClick={handleLogoClick}>
      <img src="/LOGO-NEW.svg" alt="Momentum Management" className="logo-image" />
    </Link>
  );
};

export default Logo;
