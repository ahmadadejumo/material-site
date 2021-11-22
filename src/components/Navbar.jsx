import React from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">Ade's Site</Typography>;
        <Typography variant="h6">ADE</Typography>;
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
