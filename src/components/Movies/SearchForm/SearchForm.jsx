export default function SearchForm() {
  return (
    <section className="search">
      <form className="search__container">
        <input
          className="search__container-input"
          type="text"
          placeholder="Фильм"
          minLength={2}
          maxLength={30}
          required
        />
        <button className="search__container-btn" type="button">
          Найти
        </button>
      </form>
      <form className="search__checkbox">
        <label className="search__label">
          <input
            className="search__checkbox-gray"
            type="checkbox"
            value="short"
          />
          <span className="search__checkbox-green"></span>
        </label>
        <p className="search__checkbox-text">Короткометражки</p>
      </form>
    </section>
  );
}