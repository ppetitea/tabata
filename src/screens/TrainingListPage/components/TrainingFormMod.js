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
import {
  addTraining,
  modTraining,
} from "../../../redux/actions/trainingListAction";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const TrainingFormMod = (props) => {
  const classes = useStyles();

  const { dispatch, training, open, handleClose } = props;

  const validationSchema = yup.object({
    title: yup
      .string("Donner un nom a votre entrainement")
      .min(3, "Le nom doit faire minimum 3 caracteres")
      .required("Le nom est requis"),
  });

  const formik = useFormik({
    initialValues: { title: training.title ? training.title : "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let nextTraining = Training(training);
      nextTraining.setTitle(values.title);
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
          <DialogTitle id="form-dialog-title">
            Modifier l'entrainement
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              name="title"
              label="Nom de l'entrainement"
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
              Modifier l'entrainement
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

export default connect(MapStateToProps)(TrainingFormMod);
