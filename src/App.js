import { Grid, makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Feeds from "./components/Feeds";
import Rightbar from "./components/Rightbar";

const useStyles = makeStyles((theme) => ({}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Navbar />
      <Grid container>
        <Grid item sm={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7}>
          <Feeds />
        </Grid>
        <Grid item sm={3}>
          <Rightbar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
