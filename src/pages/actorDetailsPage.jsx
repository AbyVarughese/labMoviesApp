import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getActor } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import { Grid, IconButton, Paper, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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

const ActorDetailsPage = () => {
  const navigate = useNavigate();
const { id } = useParams();
const { data: actor, error, isLoading, isError } = useQuery(
  ["actor", { id: id }],
  getActor
);

if (isLoading) {
  return <Spinner/>;
}

if (isError) {
  return <h1>{error.message}</h1>;
}
  return (
    <>
      {actor ? (
        <>
        <Paper component="div" sx={styles.root}>
          <IconButton aria-label="go back" onClick={() => navigate(-1)}>
            <ArrowBackIcon color="primary" fontSize="large" />
          </IconButton>

          <Typography variant="h4" component="h3">
            {actor.name}
          </Typography>
          <span/>
        </Paper>

        <Grid container spacing={5} style={{ padding: "15px" }}>
          <Grid item xs={3}>
          <img
                      src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                      alt={actor.name}
                    />
          </Grid>

          <Grid item xs={9}>
            <Typography>
              {actor.biography}
            </Typography>
            <Typography>
            <br/>
            <br/>
            <b>Birthday: </b>{actor.birthday}
            </Typography>
          </Grid>
        </Grid>
      </>
    ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorDetailsPage;

