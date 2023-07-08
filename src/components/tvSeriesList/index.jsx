import React from "react";
import Serie from "../tvSerieCard";
import Grid from "@mui/material/Grid";

const TvSeriesList = ( {series, action }) => {
  let serieCards = series.map((s) => (
    <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Serie key={s.id} serie={s} action={action} />
    </Grid>
  ));
  return serieCards;
};

export default TvSeriesList;
