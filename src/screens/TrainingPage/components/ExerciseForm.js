import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { useFormik } from "formik";
import * as yup from "yup";
import Training, { TrainingStep } from "../../../models/Training";
import { modTraining } from "../../../redux/actions/trainingListAction";
import { setCurrTraining } from "../../../redux/actions/currTrainingAction";

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
      .required("Le nom est requis"),
    duration: yup
      .number("Entrer le nombre de secondes")
      .required("requis")
      .positive("superieur ou egal a 0")
      .integer("nombre entier")
      .default(30),
    reposDuration: yup
      .number("Entrer le nombre de secondes")
      .required("requis")
      .min(0, "minimum 0")
      .integer("nombre entier")
      .default(30),
  });

  const formik = useFormik({
    initialValues: { title: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let nextTraining = Training(training);
      const nextDuration = values.duration * 1000;
      const nextReposDuration = values.reposDuration * 1000;
      let item = TrainingStep().setId(nextTraining.items.length);
      item.setTitle(values.title).setDuration(nextDuration).show();
      nextTraining.addItem("items", item);
      if (values.reposDuration && values.reposDuration !== "0") {
        let repos = TrainingStep().setId(nextTraining.items.length);
        repos.setTitle("Repos").setDuration(nextReposDuration).hide();
        nextTraining.addItem("items", repos);
      }
      dispatch(setCurrTraining(nextTraining));
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
            <TextField
              margin="dense"
              id="duration"
              name="duration"
              label="Duree de l'exercice"
              type="text"
              fullWidth
              value={formik.values.duration}
              onChange={formik.handleChange}
              error={formik.touched.duration && Boolean(formik.errors.duration)}
              helperText={formik.touched.duration && formik.errors.duration}
            />
            <TextField
              margin="dense"
              id="reposDuration"
              name="reposDuration"
              label="Duree du repos apres l'exercice"
              type="text"
              fullWidth
              value={formik.values.reposDuration}
              onChange={formik.handleChange}
              error={
                formik.touched.reposDuration &&
                Boolean(formik.errors.reposDuration)
              }
              helperText={
                formik.touched.reposDuration && formik.errors.reposDuration
              }
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

const MapStateToProps = (state) => ({
  training: state.currTraining,
});

export default connect(MapStateToProps)(ExerciseForm);
