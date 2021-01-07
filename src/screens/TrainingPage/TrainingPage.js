import React, { Dimensions } from "react";
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

const TrainingPage = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar title="Training" />
      <div className={classes.body}>
        <Typography className={classes.title} variant="h4" color="secondary">
          Jumping Jack
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
            value={75}
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
            value={75}
            size={"13rem"}
            className={classes.circleIn}
            color="secondary"
          />
          <Typography className={classes.timer} variant="h2" color="secondary">
            30s
          </Typography>
        </div>
        <Paper variant="outlined" className={classes.paper}>
          <List className={classes.list}>
            <ListItem button>
              <ListItemText primary="Abdo" />
              <ListItemText primary="30s" className={classes.time} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Jumping Jack" />
              <ListItemText primary="30s" className={classes.time} />
            </ListItem>
          </List>
        </Paper>
        <div className={classes.trainingButtonContainer}>
          <Button
            variant="contained"
            color="primary"
            href="/"
            className={classes.trainingButton}
          >
            Pause
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;
