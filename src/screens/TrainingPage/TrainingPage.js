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
import TrainingStepFormMod from "./components/TrainingStepFormMod";
import useShowable from "../../hooks/useShowable";
import { setCurrTrainingStep } from "../../redux/actions/currTrainingStepAction";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    margin: 10,
  },
  list: {
    justifyContent: "center",
    height: window.innerHeight * 0.75,
    "overflow-y": "scroll",
  },
  iconContainer: {
    justifyContent: "flex-end",
  },
  endListButton: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  endListButtonContainer: {
    display: "flex",
    justifyContent: "center",
    padding: 5,
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

const TrainingSetupPage = (props) => {
  const { dispatch, training } = props;
  const classes = useStyles();

  const addForm = useShowable();
  const modForm = useShowable();

  const onDragEnd = (result) => {
    if (!result.destination) return; // dropped outside the list
    const srcIndex = result.source.index;
    const destIndex = result.destination.index;
    let nextTraining = Training(training);
    nextTraining.reorder("items", srcIndex, destIndex);
    dispatch(setCurrTraining(nextTraining));
    dispatch(modTraining(nextTraining));
  };

  return (
    <div className={classes.root}>
      <AppBar title={training.title} backIcon={true} />
      <Paper variant="outlined" className={classes.paper}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId={"training"}>
            {(provided, snapshot) => (
              <List
                className={classes.list}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {training.items.map((item, i) => {
                  const rehydrated = TrainingStep(item);
                  const id = "id" + item.id;
                  return (
                    <Draggable key={id} draggableId={id} index={i}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={provided.draggableProps.style}
                        >
                          <Item
                            key={i}
                            title={rehydrated.title}
                            time={rehydrated.duration}
                            onPress={() => {
                              dispatch(setCurrTrainingStep(rehydrated));
                              modForm.show();
                            }}
                            onDelete={() => {
                              let nextTraining = Training(training);
                              nextTraining.delItemByIndex("items", i);
                              dispatch(setCurrTraining(nextTraining));
                              dispatch(modTraining(nextTraining));
                            }}
                          />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </DragDropContext>
        <div className={classes.endListButtonContainer}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={addForm.show}
            startIcon={<AddIcon />}
            className={classes.endListButton}
          >
            Ajouter
          </Button>
        </div>
      </Paper>
      <div className={classes.trainingButtonContainer}>
        <Button
          variant="contained"
          color="primary"
          href={config.isProdEnv() ? "#/training-run" : "/training-run"}
          className={classes.trainingButton}
          disabled={training.items.length === 0}
        >
          Entrainement
        </Button>
      </div>
      {addForm.visible && (
        <ExerciseForm open={addForm.visible} handleClose={addForm.hide} />
      )}
      {modForm.visible && (
        <TrainingStepFormMod
          open={modForm.visible}
          handleClose={modForm.hide}
        />
      )}
    </div>
  );
};

const MapStateToProps = (state) => ({
  training: Training(state.currTraining),
});

export default connect(MapStateToProps)(TrainingSetupPage);
