import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    display: "grid",
    gridGap: "10px",
    gridTemplateColumns: "repeat(3, 1fr)",
    "@media (max-width: 1232px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 950px)": {
      gridTemplateColumns: "repeat(1, auto)",
    },
  },
  Container: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
    textAlign: "center"

  },
}));
