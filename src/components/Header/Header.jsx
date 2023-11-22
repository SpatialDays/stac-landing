// Styles
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        {/* Logo */}
        <a href="/">
          <img src="/sd_logo.png" alt="logo" className="header__logo" />
        </a>
        {/* Links */}
        <div className="header__links">
          <a href="/" className="header__link">
            Home
          </a>
          <a href="/about" className="header__link">
            Details
          </a>
          <a
            href="https://spatialdays.com/"
            target="_blank"
            className="header__link"
          >
            Who We Are
          </a>

          {/* Button for login */}
          <div>
            <a
              href="https://portal.staging.stac.spatialdays.com/explorer"
              className="header__link header__link--btn"
              target="_blank"
            >
              Login
            </a>
          </div>
        </div>

        {/* Button for login */}
        <div
          className="header__mobile-menu"
        >
          <a
            href="https://portal.staging.stac.spatialdays.com/explorer"
            target="_blank"
            className="header__link header__mobile-login"

          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
