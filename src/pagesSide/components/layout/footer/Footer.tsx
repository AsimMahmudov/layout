import scss from "./Footer.module.scss";
import icons from "../../../../assets/Social Icons.png";

const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.footblock_top}>
            <div className={scss.futbox}>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
            </div>

            <div className={scss.footbox}>
              <h3>Products</h3>
              <a href="">Web Studio</a>
              <a href="">DynamicBox Flex</a>
              <a href="">Programming Forms</a>
            </div>

            <div className={scss.footbox}>
              <h3>Resources</h3>
              <a href="">Nostrud exercitation</a>
              <a href="">Visual mockups</a>
              <a href="">Nostrud exercitation</a>
              <a href="">Visual mockups</a>
              <a href="">Nostrud exercitation</a>
            </div>

            <div className={scss.footbox}>
              <h3>Resources</h3>
              <a href="">Consectetur adipiscing</a>
              <a href="">Labore et dolore</a>
              <a href="">Consectetur adipiscing</a>
              <a href="">Labore et dolore</a>
              <a href="">Consectetur adipiscing</a>
            </div>
          </div>

          <div className={scss.footblock_down}>
            <div className={scss.downtext}>
              <h1>
                Made by <span>Cruip</span>. All right reserved
              </h1>
            </div>
            <div className={scss.downicons}>
              <img src={icons} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
