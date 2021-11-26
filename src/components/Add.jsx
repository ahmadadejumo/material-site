import { React, useState } from "react";
import { Container, Fab, makeStyles, Modal, Tooltip } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 550,
    background: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto"
  },
}));

const Feeds = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>My Modal</Container>
      </Modal>
    </>
  );
};

export default Feeds;
