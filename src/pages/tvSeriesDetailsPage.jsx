import React from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "../components/templateTvSeriesPage";
import { getTvSerie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import TvSerieDetails from "../components/tvSerieDetails";

const TvSeriesDetailsPage = () => {
const { id } = useParams();
const { data: serie, error, isLoading, isError } = useQuery(
  ["tv", { id: id }],
  getTvSerie
);

if (isLoading) {
  return <Spinner/>;
}

if (isError) {
  return <h1>{error.message}</h1>;
}
  return (
    <>
      {serie ? (
        <>
          <PageTemplate serie={serie}>
            <TvSerieDetails serie={serie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for series details</p>
      )}
    </>
  );
};

export default TvSeriesDetailsPage;

