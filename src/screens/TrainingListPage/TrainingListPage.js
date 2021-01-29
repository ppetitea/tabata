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
import { connect } from "react-redux";
import Training, { TrainingList } from "../../models/Training";
import { config } from "../../services/services";
import {
  delTraining,
  modTraining,
  setTrainingList,
} from "../../redux/actions/trainingListAction";
import { setCurrTraining } from "../../redux/actions/currTrainingAction";
import { useHistory } from "react-router-dom";
import { ChevronRight } from "@material-ui/icons";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "@material-ui/icons/Add";
import TrainingFormAdd from "./components/TrainingFormAdd";
import useShowable from "../../hooks/useShowable";
import DeleteIcon from "@material-ui/icons/Delete";
import TrainingFormMod from "./components/TrainingFormMod";
import EditIcon from "@material-ui/icons/Edit";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    margin: 10,
  },
  list: {
    justifyContent: "center",
  },
  endListButton: {},
  endListButtonContainer: {
    display: "flex",
    justifyContent: "center",
    padding: 5,
  },
}));

const TrainingListPage = (props) => {
  const classes = useStyles();
  const { trainingList, dispatch, currTraining } = props;
  const addForm = useShowable();
  const modForm = useShowable();
  const history = useHistory();

  //   useEffect(() => {
  //     dispatch(setTrainingList([currTraining]));
  //     //   dispatch(modTraining(currTraining));
  //     return () => {};
  //   }, []);

  const onDragEnd = (result) => {
    if (!result.destination) return; // dropped outside the list
    const srcIndex = result.source.index;
    const destIndex = result.destination.index;
    let nextTrainingList = TrainingList(trainingList);
    nextTrainingList.reorder("list", srcIndex, destIndex);
    dispatch(setTrainingList(nextTrainingList.list));
  };

  return (
    <div className={classes.root}>
      <AppBar title="Training" />
      <Paper variant="outlined" className={classes.paper}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId={"trainingList"}>
            {(provided, snapshot) => (
              <List
                className={classes.list}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {trainingList.list.map((item, i) => {
                  let rehydrated = Training(item);
                  const navigateToTraining = () => {
                    dispatch(setCurrTraining(rehydrated));
                    history.push("/training");
                  };
                  const editTraining = () => {
                    dispatch(setCurrTraining(rehydrated));
                    modForm.show();
                  };
                  const onDelete = () => {
                    dispatch(delTraining(rehydrated));
                  };
                  return (
                    <Draggable key={item.id} draggableId={item.id} index={i}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={provided.draggableProps.style}
                        >
                          <ListItem button onClick={navigateToTraining} key={i}>
                            <ListItemText primary={item.title} />
                            <ListItemSecondaryAction>
                              <IconButton
                                edge="end"
                                aria-label="comments"
                                onClick={onDelete}
                              >
                                <DeleteIcon />
                              </IconButton>
                              <IconButton
                                edge="end"
                                aria-label="comments"
                                onClick={editTraining}
                              >
                                <EditIcon />
                              </IconButton>
                            </ListItemSecondaryAction>
                          </ListItem>
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
      {addForm.visible && (
        <TrainingFormAdd open={addForm.visible} handleClose={addForm.hide} />
      )}
      {modForm.visible && (
        <TrainingFormMod open={modForm.visible} handleClose={modForm.hide} />
      )}
    </div>
  );
};

const MapStateToProps = (state) => ({
  trainingList: TrainingList(state.trainingList),
  currTraining: Training(state.currTraining),
});

export default connect(MapStateToProps)(TrainingListPage);
