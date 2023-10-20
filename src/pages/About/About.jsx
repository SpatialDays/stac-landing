import "./About.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="hero-image">
        <img src="/hero/optimised/3.jpg" alt="Hero" />
      </div>

      <main className="about-container">
        <h1>About Us</h1>
        <p>
          Raster data management has always been tricky in the Earth Observation
          (EO) domain, with the maintenance, storage, access and searching of a
          dynamic archive of multiple terabytes (or even petabytes) of satellite
          imagery often being incredibly expensive and time consuming.
          Organisations often need a better approach to manage and access their
          raster satellite data resources within their organisation.
        </p>

        <section>
          <h2>The Advent of STAC</h2>
          <p>
            The STAC (SpatioTemporal Asset Catalog) specification is one of the
            most important and exciting recent developments in the EO industry
            and it really does have the potential to make many aspects of
            working with EO data simpler, easier and more cost effective.
          </p>
          <p>
            STAC is an enabling standard that helps organisations streamline and
            improve internal raster data management and also provides consistent
            access to this data regardless of whether that data is satellite
            imagery, aerial photography, DTM/DEM data, Point Cloud data etc.
          </p>
          <p>
            STAC helps answer the question: “How can we enable both our GIS
            analysts and data scientists to create and curate a catalogue of
            useful raster data for their project work from both open data
            sources and/or commercial data providers.”
          </p>
        </section>

        <section>
          <h2>STAC Integration</h2>
          <p>
            We took advantage of the recently published STAC standard and its
            associated ecosystem of STAC tools to develop an intuitive and
            user-friendly STAC Portal to help users manage their imagery data
            archive.
          </p>
        </section>

        <section>
          <h2>User Privileges</h2>
          <p>
            Users with appropriate privileges can create, update or delete
            imagery Collections from their organisation’s STAC Catalog and then
            upload their organisation’s imagery into these Collections or add
            publicly-available imagery from online services with STAC API’s e.g.
            Microsoft Planetary Computer.
          </p>
        </section>

        <section>
          <h2>Data Exploration</h2>
          <p>
            Once Collections are created, users can then search/discover, view
            and download satellite data resources across these Collections using
            a user-friendly Explorer or the STAC Browser application. Users
            needing programmatic access can use the comprehensive STAC API for
            data processing, machine learning, etc.
          </p>
        </section>

        <section>
          <h2>Supported Imagery</h2>
          <p>
            Imagery data products supported currently include satellite data
            (Landsat, Sentinel-1, Sentinel-2, Maxar, Planet), derived data
            products (e.g. those on Microsoft Planetary Computer), aerial
            photography, and height data (DTM/DSM data and Point Clouds). Other
            imagery data products can also be easily supported using custom
            parsers.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
