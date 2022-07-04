import img1 from "../../assets/about/img1.png";
import img2 from "../../assets/about/img2.png";
import img3 from "../../assets/about/img3.png";
import img4 from "../../assets/about/img4.png";
import "./index.css";

const imgs = [
  { img: img1, title: "Chapter I" },
  { img: img2, title: "Chapter II" },
  { img: img3, title: "Chapter III" },
  { img: img4, title: "Chapter IV" },
];

export default () => {
  return (
    <section className="main-section about">
      <header className="title">
        <h1>About Us</h1>
        <h3>Allow us to tell you a short story...</h3>
      </header>
      <div className="tiles">
        {imgs.map((img) => (
          <Tile
            src={img.img}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
            tileTitle={img.title}
          />
        ))}
      </div>
    </section>
  );
};

const Tile = ({ src, alt, description, tileTitle }) => (
  <div className="tile">
    <div className="tile-img">
      <img src={src} alt={alt || description} />
    </div>
    <div className="tile-footer bg-translucent">
      <p className="tile-footer-title">{tileTitle}</p>
      <p className="tile-footer-des">{description}</p>
    </div>
  </div>
);
