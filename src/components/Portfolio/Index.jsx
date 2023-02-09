import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img01 from "../../assets/01.png";
import img02 from "../../assets/02.png";
import img03 from "../../assets/03.png";
import img04 from "../../assets/04.png";
import img05 from "../../assets/05.png";
import img06 from "../../assets/06.png";
import { PortfolioCard } from "./PortfolioCard";

export const Portfolio = () => {
  const portfolio = [
    {
      image: '01.png',
      title: 'Card 1',
    },
    {
      image: '02.png',
      title: 'Card 2',
    },
    {
      image: '03.png',
      title: 'Card 3',
    },
    {
      image: '04.png',
      title: 'Card 4',
    },
    {
      image: '05.png',
      title: 'Card 5',
    },
    {
      image: '06.png',
      title: 'Card 6',
    },
  ]

  return (
    <section
      className="container portafolio"
      id="portfolio"
    >
      <div className="portfolio-title text-center">
        <h2>PORTFOLIO</h2>
        <span>
          <hr />
          <FontAwesomeIcon icon="fa-solid fa-star" />
          <hr />
        </span>
      </div>
      <div className="row">
        {portfolio.map((p, i) => <PortfolioCard image={p.image} title={p.title} key={i} />)}
      </div>
    </section>
  );
};
