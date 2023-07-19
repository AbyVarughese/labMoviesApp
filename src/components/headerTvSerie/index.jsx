import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

const TvSerieHeader = (props) => {
  const serie = props.serie;
  return (
    <Paper component="div" sx={styles.root}>
      <a href="/tv">
        <IconButton aria-label="go back">
          <ArrowBackIcon color="primary" fontSize="large" />
        </IconButton>
      </a>

      <Typography variant="h4" component="h3">
        <a href={serie.homepage}>
          <HomeIcon color="primary" fontSize="='large" />
        </a>
        {serie.name}
        <br />
        <span>{`${serie.tagline}`} </span>
      </Typography>
      <span />
    </Paper>
  );
};

export default TvSerieHeader;
