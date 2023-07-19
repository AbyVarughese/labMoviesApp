import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";

import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: {
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const TvSerieDetails = ({ serie }) => {
  
  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {serie.overview}
      </Typography>
      <Paper component="ul" sx={styles.chipSet}>
        <Chip label={`Seasons: ${serie.number_of_seasons}`} />
        <Chip label={`Episodes: ${serie.number_of_episodes}`} />
      </Paper>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Genres" sx={styles.chipLabel} color="primary" />
        </li>
        {serie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
        <Chip
          icon={<StarRate />}
          label={`${serie.vote_average} (${serie.vote_count})`}
        />
        <Chip label={`Type: ${serie.type}`} />
        <Chip label={`Status: ${serie.status}`} />
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip
            label="Production Countries"
            sx={styles.chipLabel}
            color="primary"
          />
        </li>
        {serie.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip
            label="Networks"
            sx={styles.chipLabel}
            color="primary"
          />
        </li>
        {serie.networks.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} />
          </li>
        ))}
      </Paper>
    </>
  );
};
export default TvSerieDetails;
