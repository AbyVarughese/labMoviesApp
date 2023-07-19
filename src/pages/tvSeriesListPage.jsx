import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateTvSeriesListPage";
import { getTvSeries } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import { Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TvSeriesListPage = () => {
  const queryParams = new URLSearchParams(window.location.search)
  const sortby = queryParams.get("sortby")
  const navigate = useNavigate();

  const { data, error, isLoading, isError } = useQuery(["discovertv", { sortBy: sortby ?? "popularity.desc"}], getTvSeries);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const series = data ? data.results : [];

  return (
    <>
    <Toolbar>
    <Button onClick={() => navigate("/tv")}>Popularity</Button>
    <Button onClick={() => navigate("/tv?sortby=vote_count.desc")}>Vote Count</Button>
    <Button onClick={() => navigate("/tv?sortby=primary_release_date.desc")}>Release Date</Button>
  </Toolbar>
  <PageTemplate
      title="Discover TV Series"
      series={series}
      action={(serie) => {
        //return <AddToFavouritesIcon movie={movie} />
      }}
    />
    </>
  );
};
export default TvSeriesListPage;
