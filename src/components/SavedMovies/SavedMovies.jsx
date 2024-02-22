import Header from "../Header/Header";
import Preloader from "../Movies/Preloader/Preloader";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import More from "../Movies/ShowMoreMoviesBtn/ShowMoreMovies";
import Footer from "../Footer/Footer";

import movies from "../../utils/MoviesExamples";

export default function SavedMovies() {
  const isPreloader = false;
  const savedMovies = movies.filter((item) => item.saved);
  return (
    <div className="saved-movies">
      <Header />
      <SearchForm />
      {isPreloader ? (
        <Preloader />
      ) : (
        <>
          <MoviesCardList movies={savedMovies} type={"save"} />
          <More isShowMore={false} />
        </>
      )}
      <Footer />
    </div>
  );
}