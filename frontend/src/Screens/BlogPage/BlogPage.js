import React, { useEffect, useRef, useState } from "react";
import { useStyles } from "./Styles";
import { ArrowBackIos, ThumbDown, ThumbUp } from "@material-ui/icons";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const BlogPage = () => {
  const { id } = useParams();
  const [blogPage, setBlogPage] = useState({});
  const [likes, setLikes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const isMounted = useRef(false);

  const fetchBlogPage = () => {
    if (isMounted.current) return;
    setIsLoading(true);
    axios
      .get(`http://127.0.0.1:8000/api/blog/${id}`)
      .then((res) => {
        setBlogPage(res.data);
        setLikes(res.data.likes);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    isMounted.current = true;
  };

  const handleLike = (vote) => {
    axios
      .put(`http://127.0.0.1:8000/api/blog/${id}?likes=${likes + vote}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setLikes(likes + vote);
    fetchBlogPage();
  };

  useEffect(() => {
    fetchBlogPage();
  }, []);

  const classes = useStyles();
  if (isLoading) {
    return (
      <Container className={classes.Container}>
        <Link to={`/`} className={classes.link} style={{ alignSelf: "left" }}>
          <Button fontSize="small">
            <ArrowBackIos fontSize="small" className={classes.backbutton} />
            Back to blog
          </Button>
        </Link>
        <CircularProgress color={"inherit"} />
      </Container>
    );
  }

  return (
    <Container className={classes.Container}>
      <Link to={`/`} className={classes.link} style={{ alignSelf: "left" }}>
        <Button fontSize="small">
          <ArrowBackIos fontSize="small" className={classes.backbutton} />
          Back to blog
        </Button>
      </Link>
      <Typography variant="h4" className={classes.blogTitle}>
        {blogPage.title}
      </Typography>
      <Card className={classes.cardstyle}>
        <CardHeader subheader={blogPage.author} />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {blogPage.content}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={() => handleLike(1)}>
            <ThumbUp fontSize="small" />
          </IconButton>
          <IconButton onClick={() => handleLike(-1)}>
            <ThumbDown fontSize="small" />
          </IconButton>
        </CardActions>
      </Card>
    </Container>
  );
};

export default BlogPage;
