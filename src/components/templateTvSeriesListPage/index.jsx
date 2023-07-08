import React, { useState } from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import MovieList from "../movieList";
import TvSeriesList from "../tvSeriesList";

const styles = {
  root: {
    padding: "20px",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
};

function TvSeriesListPageTemplate({ series, name, action }) {
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const genreId = Number(genreFilter);
  /*
  let displayedMovies = series
    .filter((m) => {
      return m.title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "title") setTitleFilter(value);
    else setGenreFilter(value);
  };
  */
  return (
   <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header title={name} />
        </Grid>
        <Grid item container spacing={5}>
          <TvSeriesList action={action} series={series} />
        </Grid>
      </Grid>
      {/*
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={handleChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
        />
      </Drawer>
      */}
    </>  
  );
}
export default TvSeriesListPageTemplate;
