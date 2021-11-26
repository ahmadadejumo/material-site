import { React, useState } from "react";
import {
  Container,
  Fab,
  makeStyles,
  Modal,
  TextField,
  Tooltip,
} from "@material-ui/core";
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
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
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
        <Container className={classes.container}>
          <form className={classes.form}>
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Title"
                variant="standard"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
          </form>
        </Container>
      </Modal>
    </>
  );
};

export default Feeds;