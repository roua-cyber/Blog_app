import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  Container: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
    textAlign: "center",
  },
  backbutton: {
    color: "gray",
  },
  link: {
    width: "100%",
    display: "flex",
    justifyContent: "flexStart",
    textDecoration: "none",
  },
  cardstyle: {
    padding: "5px",
  },
}));
