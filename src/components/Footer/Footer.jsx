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
          <h4 dir="rtl">Contact </h4>
          <address dir="rtl">
            <p>Unit 1 Hercules House</p>
            <p>Calleva Park</p>
            <p>RG7 8DN</p>
            <p>Email: enquiries@spatialdays.com</p>
            <p>Phone: +44 (0) 118 971 0035</p>
          </address>
        </div>
      </div>
      <div className="footer__copyright">
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://spatialdays.com" target="_blank">
          Spatial Days Ltd.
        </a>{" "}
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
