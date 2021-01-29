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
import { addTraining } from "../../../redux/actions/trainingListAction";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const TrainingFormAdd = (props) => {
  const classes = useStyles();

  const { dispatch, open, handleClose } = props;

  const validationSchema = yup.object({
    title: yup
      .string("Donner un nom a votre entrainement")
      .min(3, "Le nom doit faire minimum 3 caracteres")
      .required("Le nom est requis"),
  });

  const formik = useFormik({
    initialValues: { title: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let nextTraining = Training();
      nextTraining.setId().setTitle(values.title).setCollection("items", []);
      dispatch(addTraining(nextTraining));
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
          <DialogTitle id="form-dialog-title">Nouvel entrainement</DialogTitle>
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
              Ajouter le nouvel entrainement
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

const MapStateToProps = (state) => ({});

export default connect(MapStateToProps)(TrainingFormAdd);
