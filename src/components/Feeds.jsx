import React from "react";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feeds = () => {
  const classes = useStyles();
  return <Container className={classes.container}>Feeds</Container>;
};

export default Feeds;
