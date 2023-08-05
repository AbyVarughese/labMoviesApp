import React, { useContext } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StarIcon from "@mui/icons-material/Star"
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { MoviesContext } from "../../contexts/moviesContext";

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

const MovieHeader = (props) => {
  const movie = props.movie;
  const favourites = JSON.parse(localStorage.getItem("favourites")) ?? [];
  const {myMovie, markMovie, unmarkMovie} = useContext(MoviesContext);

  let fav = false;
  favourites.forEach((m) => {
    if (m.id == movie.id) {
      fav = true;
    }
  });
  const navigate = useNavigate();
  
  const toggleMyMovie = () => {
    myMovie === movie.id ? unmarkMovie() : markMovie(movie.id);
  };

  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back" onClick={() => navigate(-1)}>
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      {fav ? (
        <Avatar sx={styles.avatar}>
          <FavoriteIcon />
        </Avatar>
      ) : null}

      <Typography variant="h4" component="h3">
        {movie.title}
        {"   "}
        <a href={movie.homepage}>
          <HomeIcon color="primary" fontSize="='large" />
        </a>
        <br />
        <span>{`${movie.tagline}`} </span>
      </Typography>
      <IconButton aria-label="go forward" onClick={() => toggleMyMovie()}>
        <StarIcon color={myMovie === movie.id ? "success" : "default"} fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
