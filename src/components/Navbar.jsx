import React from "react";
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

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
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  searchButton: {
    marginRight: theme.spacing(2),
  },
  icon: {
    display: "flex",
    alignItems: "center",
  },
  badge: {
    marginRight: theme.spacing(2),
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
          <InputBase placeholder="Search..." className={classes.input} />
        </div>
        <div className={classes.icon}>
          <SearchIcon className={classes.searchButton} />
          <Badge color="secondary" badgeContent={4} className={classes.badge}>
            <MailIcon />
          </Badge>
          <Badge color="secondary" badgeContent={4} className={classes.badge}>
            <NotificationsIcon />
          </Badge>
          <Avatar alt="Remy Sharp" src="https://ibb.co/4P0v9jZ" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
