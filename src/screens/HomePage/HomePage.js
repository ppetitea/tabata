import React from "react";
import {
  Button,
  IconButton,
  ListItemSecondaryAction,
  Paper,
} from "@material-ui/core";
import AppBar from "../../components/AppBar/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Item from "./components/Item";
import ExerciseForm from "./components/ExerciseForm";
import { connect, useDispatch, useSelector } from "react-redux";
import { modTraining } from "../../redux/actions/trainingListAction";
import Training, { TrainingStep } from "../../models/Training";
import { setCurrTraining } from "../../redux/actions/currTrainingAction";
import { config } from "../../services/services";

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    margin: 10,
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
    width: "100%",
    bottom: 10,
  },
  trainingButton: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
}));

const HomePage = (props) => {
  const { dispatch, training } = props;
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={classes.root}>
      <AppBar title="Tabata" />
      <Paper variant="outlined" className={classes.paper}>
        <List className={classes.list}>
          {training.items.map((item, i) => {
            const rehydrated = TrainingStep(item);
            return (
              <Item
                key={i}
                title={rehydrated.title}
                time={rehydrated.duration}
                onDelete={() => {
                  let nextTraining = Training(training);
                  nextTraining.delItemByIndex("items", i);
                  dispatch(setCurrTraining(nextTraining));
                }}
              />
            );
          })}
          <ListItem>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClickOpen}
              startIcon={<AddIcon />}
              className={classes.endListButton}
            >
              Ajouter
            </Button>
          </ListItem>
        </List>
      </Paper>
      <div className={classes.trainingButtonContainer}>
        <Button
          variant="contained"
          color="primary"
          href={config.isProdEnv() ? "#/training" : "/training"}
          className={classes.trainingButton}
        >
          Entrainement
        </Button>
      </div>
      <ExerciseForm open={open} handleClose={handleClose} />
    </div>
  );
};

const MapStateToProps = (state) => ({
  training: Training(state.currTraining),
});

export default connect(MapStateToProps)(HomePage);
