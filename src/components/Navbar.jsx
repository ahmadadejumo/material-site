import React from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" className={classes.logoLg}>
          Ade's Site
        </Typography>
        ;
        <Typography variant="h6" className={classes.logoSm}>
          ADE
        </Typography>
        ;
        <div className={classes.search}>
          <Search />
          <InputBase />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
