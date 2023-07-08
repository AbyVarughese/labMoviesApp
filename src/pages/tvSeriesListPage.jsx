import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateTvSeriesListPage";
import { getTvSeries } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const TvSeriesListPage = () => {
  const { data, error, isLoading, isError } = useQuery("discover", getTvSeries);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const series = data ? data.results : [];

  return (
    <PageTemplate
      title="Discover TV Series"
      series={series}
      action={(serie) => {
        //return <AddToFavouritesIcon movie={movie} />
      }}
    />
  );
};
export default TvSeriesListPage;
