import NavTab from "../NavTab/NavTab";
import headingLogo from "../../../images/headingLogo.svg";

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__text">
        <h2 className="promo__title">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h2>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <NavTab />
      </div>
      <div className="promo__image">
        <img
          className="promo__image-web"
          src={headingLogo}
          alt="Фигура Земли, созданная из множества слов web"
        ></img>
      </div>
    </section>
  );
}