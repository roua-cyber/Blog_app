import React, { useEffect, useRef, useState } from "react";
import "./Styles.js";
import axios from "axios";
import {
  Container,
  Typography,
  CircularProgress,
  TextField,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { useStyles } from "./Styles.js";
import BlogCard from "../BlogCard/BlogCard";

const BlogsList = () => {
  const classes = useStyles();
  const [blogList, setBlogList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setsearchText] = React.useState("");
  const isMounted = useRef(false);
  //search by title
  const handleSearch = (e) => {
    setsearchText(e.target.value);
  };
  const handleGetByTitle = (title) => {
    setIsLoading(true);
    axios
      .get(`http://127.0.0.1:8000/api/bloglist/${title}`)
      .then((res) => {
        setBlogList(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //get blog list
  useEffect(() => {
    if (isMounted.current) return;
    setIsLoading(true);
    axios
      .get("http://127.0.0.1:8000/api/bloglist")
      .then((res) => {
        setBlogList(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    isMounted.current = true;
  }, []);

  if (isLoading) {
    return (
      <Container className={classes.Container}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <CircularProgress color={"inherit"} />
      </Container>
    );
  }

  return (
    <Container className={classes.Container}>
      <Typography variant="h4" className={classes.blogTitle}>
        Articles
      </Typography>
      <div>
        <TextField
          type="search"
          value={searchText}
          onChange={handleSearch}
          placeholder="search"
        />
        <IconButton onClick={() => handleGetByTitle(searchText)}>
          <SearchIcon />
        </IconButton>
      </div>
      {blogList.length > 0 ? (
        <div className={classes.blogsContainer}>
          {blogList.map((post) => (
            <BlogCard
              title={post.title}
              content={post.content}
              author={post.author}
              id={post.blogid}
              key={`post_${post.blogid}`}
              likes={post.likes}
            />
          ))}
        </div>
      ) : (
        <div>No post is available</div>
      )}
    </Container>
  );
};

export default BlogsList;
