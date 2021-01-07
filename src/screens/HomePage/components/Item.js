import React from "react";
import { IconButton, ListItemSecondaryAction } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Item = (props) => {
  const classes = useStyles();

  const { title, onPress = () => {}, onDelete = () => {} } = props;

  return (
    <ListItem button>
      <ListItemText primary={title} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="comments">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Item;
