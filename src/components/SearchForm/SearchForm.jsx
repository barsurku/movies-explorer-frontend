import Checkbox from "../Checkbox/Checkbox";

import { useForms } from "../Form/Form";
import { useLocation } from "react-router-dom";
import { useEffect} from "react";

export default function SearchForm({
  isActiveCheckbox,
  setIsActiveCheckbox,
  searchResultsState,
  detectMovies,
  moviesList,
  getMovies,
}) {
  const location = useLocation();

  const { values, handleChangeForm, resetForm } = useForms();

  function onSubmit(evt) {
    evt.preventDefault();

    if (values.search === "" || values.search === undefined) {
    } else {
      getMovies(values.search);
    }
  }

  function toggleCheckbox() {
    if (isActiveCheckbox) {
      setIsActiveCheckbox(false);
      detectMovies(values.search || "", false, moviesList);
    } else {
      setIsActiveCheckbox(true);
      detectMovies(values.search || "", true, moviesList);
    }
  }

  useEffect(() => {
    location.pathname === "/movies" &&
      resetForm({ search: searchResultsState });
  }, [searchResultsState, resetForm, location.pathname]);

  return (
    <div className="search">
      <form className="search__form" onSubmit={onSubmit}>
        <div className="search__container">
          <input
            className="search__container-input"
            type="text"
            name="search"
            value={values.search || ""}
            placeholder="Фильм"
            onChange={handleChangeForm}
          ></input>
          <button type="submit" className="search__container-btn">
            Найти
          </button>
          <span className="search__error"></span>
        </div>
        <Checkbox
          isActiveCheckbox={isActiveCheckbox}
          toggleCheckbox={toggleCheckbox}
        ></Checkbox>
      </form>
    </div>
  );
}