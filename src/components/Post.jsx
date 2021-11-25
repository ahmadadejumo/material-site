import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));

const Feeds = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAwPHUGvWru7x2Oy8XIKMRwcTAblIeg1kZg&usqp=CAU"
          title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            My first post
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla
            accusantium consequuntur veniam fugiat harum quis deleniti quaerat
            quia, voluptatum repellat qui iure ipsum porro culpa suscipit
            sapiente error commodorem ipsum dolor sit amet consectetur
            adipisicing elit. Et nulla accusantium consequuntur veniam fugiat
            harum quis deleniti quaerat quia, voluptatum repellat qui iure ipsum
            porro culpa suscipit sapiente error commodi.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="smaill" color="primary">
          Share
        </Button>
        <Button size="smaill" color="primary">
          Learn more
        </Button>
      </CardActions>
    </Card>
  );
};

export default Feeds;
