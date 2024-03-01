import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ movies, type }) {
  return (
    <section className="movies-list">
      <ul className="movies-list__cards">
        {movies.map((item) => (
          <MoviesCard movie={item} key={item._id} type={type} />
        ))}
      </ul>
    </section>
  );
}