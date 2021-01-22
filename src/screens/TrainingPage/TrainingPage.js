import React, { Dimensions, useEffect, useState } from "react";
import {
  Button,
  IconButton,
  ListItemSecondaryAction,
  Paper,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import AppBar from "../../components/AppBar/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import Training from "../../models/Training";
import Timer from "../../models/Timer";
import { setCurrTraining } from "../../redux/actions/currTrainingAction";

const useStyles = makeStyles((theme) => ({
  root: {},
  body: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
  },
  title: {
    paddingTop: 50,
    paddingBottom: 50,
    textAlign: "center",
  },
  progressArea: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "6rem",
  },
  circleOutBg: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  circleOut: {
    marginTop: "-16rem",
  },
  circleInBg: {
    marginTop: "-14.5rem",
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  circleIn: {
    marginTop: "-13rem",
  },
  timer: {
    marginTop: "-8.5rem",
  },
  paper: {
    marginTop: 30,
    margin: 10,
    width: "90%",
    height: "20%",
    "overflow-y": "scroll",
  },
  list: {
    justifyContent: "center",
  },
  iconContainer: {
    justifyContent: "flex-end",
  },
  endListButton: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  trainingButtonContainer: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    bottom: 10,
  },
  trainingButton: {
    width: "90%",
    marginLeft: 10,
    marginRight: 10,
  },
  time: {
    textAlign: "end",
  },
}));

const useTimer = () => {
  const [state, setState] = useState(Timer().initTimer());

  const play = () => setState({ ...Timer(state).play() });
  const replay = () => setState({ ...Timer(state).replay() });
  const pause = () => setState({ ...Timer(state).pause() });
  const stop = () => setState({ ...Timer(state).stop() });
  const increment = () => setState({ ...Timer(state).increment() });
  const setTime = (v) => setState({ ...Timer(state).setTime(v) });

  useEffect(() => {
    const timer = setInterval(() => {
      if (state && state.isRunning) increment();
    }, 1000);
    return () => clearInterval(timer);
  }, [state]);

  return {
    timer: state,
    play,
    replay,
    pause,
    stop,
    setTime,
  };
};

const TrainingPage = (props) => {
  const classes = useStyles();
  const { training, dispatch } = props;
  const { timer, play, replay, pause, stop, setTime } = useTimer();

  const time = timer ? timer.time : 0;
  if (training.isEnded(time)) stop();

  return (
    <div className={classes.root}>
      <AppBar title="Training" backIcon={true} />
      <div className={classes.body}>
        <Typography className={classes.title} variant="h4" color="secondary">
          {training.getStepByTime(time).title}
        </Typography>
        <div className={classes.progressArea}>
          <CircularProgress
            variant="determinate"
            value={100}
            size={"16rem"}
            className={classes.circleOutBg}
          />
          <CircularProgress
            variant="determinate"
            value={training.getPercent(time) * 100}
            size={"16rem"}
            className={classes.circleOut}
          />
          <CircularProgress
            variant="determinate"
            value={100}
            size={"13rem"}
            className={classes.circleInBg}
            color="secondary"
          />
          <CircularProgress
            variant="determinate"
            value={training.getStepPercent(time) * 100}
            size={"13rem"}
            className={classes.circleIn}
            color="secondary"
          />
          <Typography className={classes.timer} variant="h2" color="secondary">
            {training.getStepTime(time) / 1000}s
          </Typography>
        </div>
        <Paper variant="outlined" className={classes.paper}>
          <List className={classes.list}>
            {training.getRemainingSteps(time).map((item, i) => {
              return (
                <ListItem
                  button
                  key={`${i}`}
                  onClick={() => setTime(training.getStepStartTime(item.id))}
                >
                  <ListItemText primary={item.title} />
                  <ListItemText
                    primary={`${item.duration / 1000}s`}
                    className={classes.time}
                  />
                </ListItem>
              );
            })}
          </List>
        </Paper>
        <div className={classes.trainingButtonContainer}>
          <Button
            disabled={!timer.can("play")}
            variant="contained"
            color="primary"
            onClick={() => play()}
            className={classes.trainingButton}
          >
            Play
          </Button>
          <Button
            disabled={!timer.can("pause")}
            variant="contained"
            color="primary"
            onClick={() => pause()}
            className={classes.trainingButton}
          >
            Pause
          </Button>
          <Button
            disabled={!timer.can("stop")}
            variant="contained"
            color="primary"
            onClick={() => stop()}
            className={classes.trainingButton}
          >
            Stop
          </Button>
          <Button
            disabled={!timer.can("replay")}
            variant="contained"
            color="primary"
            onClick={() => replay()}
            className={classes.trainingButton}
          >
            Replay
          </Button>
        </div>
      </div>
    </div>
  );
};

const MapStateToProps = (state) => ({
  training: Training(state.currTraining),
});

export default connect(MapStateToProps)(TrainingPage);
