import React, { useContext } from "react";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import { MoviesContext } from "../contexts/moviesContext";

const MyMovieDetailsPage = () => {
  const { myMovie } = useContext(MoviesContext);
  
  if((myMovie || 0) === 0) {
    return "My movie is not set";
  }

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: myMovie }],
    getMovie
  );

if (isLoading) {
  return <Spinner/>;
}

if (isError) {
  return <h1>{error.message}</h1>;
}
  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MyMovieDetailsPage;

