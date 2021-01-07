import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { useFormik } from "formik";
import * as yup from "yup";
import Exercise from "../../../models/Exercise";
import { modTraining } from "../../../redux/actions/trainingListAction";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const ExerciseForm = (props) => {
  const classes = useStyles();

  const { dispatch, training, open, handleClose } = props;

  const validationSchema = yup.object({
    title: yup
      .string("Entrer le nom de l'exercice")
      .min(3, "Le nom doit faire minimum 3 caracteres")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: { title: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const item = Exercise().setTitle(values.title);
      const nextTraining = training.addItem("items", item);
      dispatch(modTraining(nextTraining));
    },
  });

  return (
    <div className={classes.root}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle id="form-dialog-title">Nouvel exercice</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              name="title"
              label="Nom de l'exercice"
              type="text"
              fullWidth
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="secondary"
              //   onClick={handleClose}
              startIcon={<AddIcon />}
              fullWidth
              type="submit"
            >
              Ajouter l'exercice
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default ExerciseForm;
