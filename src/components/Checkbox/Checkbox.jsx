export default function Checkbox({ isActiveCheckbox, toggleCheckbox }) {
  return (
    <section className="checkbox-search">
      <input
        className="checkbox-search__image"
        id="checkbox-search"
        type="checkbox"
        checked={isActiveCheckbox ? true : false}
        onChange={toggleCheckbox}
      ></input>
      <label htmlFor="checkbox-search"></label>
      <p className="checkbox-search__text">Короткометражки</p>
    </section>
  );
}