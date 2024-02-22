import portfolioArrow from "../../../images/portfolioArrow.svg";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__element">
          <a
            className="portfolio__link"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
            <img
              className="portfolio__arrow-link"
              src={portfolioArrow}
              alt="Стрелка для ссылки"
            ></img>
          </a>
        </li>
        <li className="portfolio__element">
          <a
            className="portfolio__link"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
            <img
              className="portfolio__arrow-link"
              src={portfolioArrow}
              alt="Стрелка для ссылки"
            ></img>
          </a>
        </li>
        <li className="portfolio__element">
          <a
            className="portfolio__link"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
            <img
              className="portfolio__arrow-link"
              src={portfolioArrow}
              alt="Стрелка для ссылки"
            ></img>
          </a>
        </li>
      </ul>
    </section>
  );
}