import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;
