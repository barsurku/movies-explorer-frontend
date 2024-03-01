import promoLogo from "../../../images/headingLogo.svg";

export default function Promo() {
    return (
        <section className="promo">
            <div className="promo__container">
                <div className="promo__text">
                    <h1 className="promo__title">
                        Учебный проект cтудента факультета Веб-разработки.
                    </h1>
                    <p className="promo__subtitle">
                        Листайте ниже, чтобы узнать больше про этот проект и его
                        создателя.
                    </p>
                    <a
                        className="promo__more-link"
                        href="https://github.com/barsurku"
                        target="blank"
                    >
                        Узнать больше
                    </a>
                </div>
                <img
                    className="promo__image-web"
                    src={promoLogo}
                    alt="Фигура Земли, созданная из множества слов web"
                ></img>
            </div>
        </section>
    );
}