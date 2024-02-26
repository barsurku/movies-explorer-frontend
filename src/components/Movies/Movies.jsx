import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Preloader from "../Movies/Preloader/Preloader";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import ShowMoreMovies from "../Movies/ShowMoreMoviesBtn/ShowMoreMovies";
import movies from "../../utils/MoviesExamples";
import Footer from "../Footer/Footer";

export default function Movies() {
  const isPreloaderVisible = false;

  return (
    <>
      <Header />
      <main className="movies-main">
        <SearchForm />
        {isPreloaderVisible ? (
          <Preloader />
        ) : (
          <>
            <MoviesCardList movies={movies} type="all" />
            <ShowMoreMovies isShowMoreMovies={true} />
          </>
        )}
      </main>

      <Footer />
    </>
  );
}