import React from "react"; 
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getTvSerieImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import TvSerieHeader from "../headerTvSerie";

const styles = {
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: "100vh",
  },
};

const TemplateTvSeriesPage = ({ serie, children }) => {
  const { data , error, isLoading, isError } = useQuery(
    ["images", { id: serie.id }],
    getTvSerieImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.posters 

  return (
    <>
      <TvSerieHeader serie={serie} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={styles.gridListRoot}>
            <ImageList cols={1}>
              {images.map((image) => (
                <ImageListItem
                  key={image.file_path}
                  sx={styles.gridListTile}
                  cols={1}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                    alt={image.poster_path}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateTvSeriesPage;
