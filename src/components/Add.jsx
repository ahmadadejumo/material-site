import React from "react";
import { Fab, makeStyles, Tooltip } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";

const useStyles = makeStyles((theme) => ({}));

const Feeds = () => {
  const classes = useStyles();
  return (
    <>
      <Tooltip>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
};

export default Feeds;
