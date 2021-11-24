import { React, useState } from "react";
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
import CancelIcon from "@mui/icons-material/Cancel";

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
    [theme.breakpoints.up("sm")]: {
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
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  searchButton: {
    marginRight: theme.spacing(),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles({ open });
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
          <CancelIcon
            className={classes.cancel}
            onClick={() => setOpen(false)}
          />
        </div>
        <div className={classes.icons}>
          <SearchIcon
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
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
