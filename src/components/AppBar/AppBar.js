import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { IconButton } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  leftButtonContainer: {
    flex: 1,
    // backgroundColor: "blue",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    // backgroundColor: "red",
  },
  right: {
    // marginLeft: theme.spacing(2),
    // backgroundColor: "green",
    flex: 1,
  },
}));

const AppBar = (props) => {
  const { title, backIcon, history } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MUIAppBar position="static">
        <Toolbar>
          {backIcon && (
            <div className={classes.leftButtonContainer}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="back"
                onClick={() => history.goBack()}
              >
                <ChevronLeftIcon />
              </IconButton>
            </div>
          )}
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          {backIcon && <Typography className={classes.title}> </Typography>}
        </Toolbar>
      </MUIAppBar>
    </div>
  );
};
export default withRouter(AppBar);
