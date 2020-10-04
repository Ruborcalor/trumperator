import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import FakeTweet from "fake-tweet";
import "fake-tweet/build/index.css";
import { tweetData } from "./tweetData";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Zoom from "@material-ui/core/Zoom";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const shuffledTweetData = shuffle(tweetData);

function App() {
  const classes = useStyles();

  const [tweetIndex, setTweetIndex] = React.useState(0);
  const [score, setScore] = React.useState({ right: 0, wrong: 0 });
  const [showCross, setShowCross] = React.useState(false);
  const [showCheck, setShowCheck] = React.useState(false);
  // const shuffledTweetData = shuffle(tweetData);
  // const [shuffledTweetData, setShuffledTweetData] = React.useState((tweetData));
  // const shuffledTweetData = shuffle(tweetData);

  // useEffect(() => {
  //   console.log("Use effect");
  //   let shuffled = shuffle(shuffledTweetData);
  //   console.log(shuffled);
  //   setShuffledTweetData(shuffled);
  // }, []);

  const applyRight = () => {
    setShowCheck(true);
    setTimeout(() => {
      setShowCheck(false);
    }, 500);
    setScore({
      right: score.right + 1,
      wrong: score.wrong,
    });
    if (tweetIndex === shuffledTweetData.length - 1) {
      setTweetIndex(0);
    } else {
      setTweetIndex(tweetIndex + 1);
    }
  };

  const applyWrong = () => {
    setShowCross(true);
    setTimeout(() => {
      setShowCross(false);
    }, 500);
    setScore({
      right: score.right,
      wrong: score.wrong + 1,
    });
    if (tweetIndex === shuffledTweetData.length - 1) {
      setTweetIndex(0);
    } else {
      setTweetIndex(tweetIndex + 1);
    }
  };

  const clickReal = () => {
    if (shuffledTweetData[tweetIndex].real === true) {
      applyRight();
    } else {
      applyWrong();
    }
  };

  const clickFake = () => {
    if (shuffledTweetData[tweetIndex].real === false) {
      applyRight();
    } else {
      applyWrong();
    }
  };

  return (
    <div className="App" className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Trumperator
          </Typography>
          <Button color="inherit">Maishacks 2020</Button>
        </Toolbar>
      </AppBar>
      <div>
        <FakeTweet config={shuffledTweetData[tweetIndex]} />
        <Grid
          container
          spacing={10}
          xs={12}
          sm={6}
          style={{
            alignItems: "center",
            justifyContent: "space-around",
            margin: "auto",
          }}
        >
          <Button
            onClick={() => clickReal()}
            variant="contained"
            color="primary"
            style={{ width: "40%", height: 60, backgroundColor: "green" }}
          >
            Real
          </Button>
          <Button
            onClick={() => clickFake()}
            variant="contained"
            style={{
              width: "40%",
              height: 60,
              backgroundColor: "red",
              color: "white",
            }}
          >
            Fake
          </Button>
        </Grid>
      </div>
      <Snackbar
        /* style={{ height: "100%" }} */
        style={{ top: 80 }}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={true}
        message="Score"
      >
        <Alert variant="filled" severity="info">
          <AlertTitle>Score</AlertTitle>
          Right {score.right} - Wrong {score.wrong}
        </Alert>
      </Snackbar>
      <Zoom in={showCheck}>
          <DoneIcon
            style={{
              fontSize: "400px",
              position: "absolute",
              margin: "auto",
              top: 0,
              right: 0,
              bottom: 75,
              left: 0,
              /* left: "-50%", */
              /* top: "-50%", */
              color: "green",
            }}
          />
      </Zoom>
      <Zoom in={showCross}>
          <ClearIcon
            style={{
              fontSize: "400px",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 75,
              top: 0,
              margin: "auto",
              /* position: "relative", */
              /* left: "-50%", */
              /* top: "-50%", */
              color: "red",
            }}
          />
      </Zoom>
    </div>
  );
}

export default App;
