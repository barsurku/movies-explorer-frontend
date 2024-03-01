export default function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title" id="about-project">
        О проекте
      </h2>
      <div className="about-project__info">
        <div className="about-project__text">
          <h3 className="about-project__text-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text-discription">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__text">
          <h3 className="about-project__text-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text-discription">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <ul className="about-project__duration">
        <li>
          <p className="about-project__duration-text about-project__back-end">
            1 неделя
          </p>
          <p className="about-project__duration-discription">Back-end</p>
        </li>
        <li>
          <p className="about-project__duration-text about-project__front-end">
            4 недели
          </p>
          <p className="about-project__duration-discription">Front-end</p>
        </li>
      </ul>
    </section>
  );
}