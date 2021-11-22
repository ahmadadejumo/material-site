import React from "react";
import {
  AppBar,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
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
      <Toolbar className={classes.toolBar}>
        <Typography variant="h6" className={classes.logoLg}>
          Ade's Site
        </Typography>

        <Typography variant="h6" className={classes.logoSm}>
          ADE
        </Typography>

        <div className={classes.search}>
          <SearchIcon />
          <InputBase placeholder="Search..." />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
