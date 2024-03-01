//кнопка Ещё на странице с фильмами

export default function ShowMoreMovies({ isShowMoreMovies }) {
  return (
    <section
      className={`more-movies ${isShowMoreMovies ? "more-movies-show" : "more-movies-hide"}`}
    >
      <button
        type="button"
        className={`more-movies__button ${
          isShowMoreMovies ? "" : "more-movies__button_hide"
        }`}
      >
        Ещё
      </button>
    </section>
  );
}