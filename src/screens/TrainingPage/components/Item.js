import React from "react";
import { IconButton, ListItemSecondaryAction } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {},
  time: { textAlign: "end" },
}));

const Item = (props) => {
  const classes = useStyles();

  const { title, time, onPress = () => {}, onDelete = () => {} } = props;

  return (
    <ListItem button onClick={onPress}>
      <ListItemText primary={title} />
      <ListItemText className={classes.time} primary={`${time / 1000}s`} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="comments" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Item;
