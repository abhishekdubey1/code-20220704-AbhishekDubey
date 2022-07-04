import img1 from "../../assets/explore/img1.png";
import img2 from "../../assets/explore/img2.png";
import "./index.css";

export default () => {
  return (
    <section className="main-section explore">
      <header className="title">
        <h1>Explore</h1>
        <h3>
          From one-guest rooms to
          <br />
          penthouses with pools and gardens
        </h3>
      </header>
      <div className="tiles">
        <Tile
          src={img1}
          description="Room with one king-sized bed"
          price="35$"
          area="28м²"
          action="Book!"
        />
        <Tile
          src={img2}
          description="Penthouse for 8 person"
          price="2039$"
          area="438м²"
          action="Book!"
        />
      </div>
    </section>
  );
};

const Tile = ({ src, alt, description, price, area, action }) => (
  <div className="tile">
    <div className="tile-img">
      <img src={src} alt={alt || description} />
    </div>
    <div className="tile-footer bg-translucent d-flex justify-between">
      <div className="tile-footer-details d-flex flex-col justify-evenly">
        <p className="desc">{description}</p>
        <div className="d-flex justify-between">
          <div className="tile-price">
            <span className="primary">{price}</span>
          </div>
          <div className="tile-area">
            <span className="primary">{area}</span>
          </div>
        </div>
      </div>
      <div className="btn-action">
        <button className="btn primary">{action}</button>
      </div>
    </div>
  </div>
);
