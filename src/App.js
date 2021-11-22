import "./App.css";
import { makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";
import { theme } from "./theme";

const useStyles = makeStyles((theme) => ({}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
