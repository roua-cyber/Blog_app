import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles(() => ({
  votebutton: {
    color: "gray",
    "&:hover": {
      color: "black",
    },
  },
  forwardbutton: {
    color: "gray",
  },
  link: {
    textDecoration: "none",
  },
  greenStyle: {
    border: "1px solid green",  padding: "5px",
    "&:hover": {
      color: "black",
    },

  },
  redStyle: {
    padding: "5px",
    border: "1px solid red",
  },
  classicStyle: {
    padding: "5px",
  },
}));
