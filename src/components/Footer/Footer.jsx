import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h4>Company </h4>
          <p>
            Spatial Days Ltd for Mapping, Consultancy and Software Development
          </p>
        </div>

        <div className="footer__section">
          <h4>Contact </h4>
          <address>
            <p>Unit 1 Hercules House</p>
            <p>Calleva Park</p>
            <p>RG7 8DN</p>
            <p>Email: info@spatialdays.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </address>
        </div>
      </div>
      <div className="footer__copyright">
        &copy; {new Date().getFullYear()} Spatial Days Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
