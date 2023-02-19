import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import { ArrowForwardIos } from "@material-ui/icons";
import { useStyles } from "./Styles";

const BlogCard = ({ title, content, author, id, likes }) => {
  const classes = useStyles();
  return (
    <Card
      className={
        likes > 0
          ? classes.greenStyle
          : likes < 0
          ? classes.redStyle
          : classes.classicStyle
      }
    >
      <CardHeader title={title} subheader={author} />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {content?.substring(0, 100)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/blog__page/${id}`} className={classes.link}>
          <Button size="small">
            continue reading
            <ArrowForwardIos
              fontSize="small"
              className={classes.forwardbutton}
            />
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
