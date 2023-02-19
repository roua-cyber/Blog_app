import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { useStyles } from "./Styles";

function NavBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Typography
          component="a"
          noWrap
          href="/"
          variant="h6"
          className={classes.logo}
        >
          Blog
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/add__blog"
          className={classes.navlink}
        >
          Add Post
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
