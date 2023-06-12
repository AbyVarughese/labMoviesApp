import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcoming } from "../api/tmdb-api";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const UpcomingMoviesPage = (props) => {
   
  const { data, error, isLoading, isError } = useQuery("upcoming", getUpcoming);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data.results : [];
  const favourites = movies.filter((m) => m.favourite);
  localStorage.setItem("favourites", JSON.stringify(favourites));

  const addToFavourites = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favourite: true } : m
    );
    setMovies(updatedMovies);
  };
  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        //return <AddToFavouritesIcon movie={movie} />;
        return <PlaylistAddIcon movie={movie} />;
        
      }}
    />
  );
};
export default UpcomingMoviesPage;
