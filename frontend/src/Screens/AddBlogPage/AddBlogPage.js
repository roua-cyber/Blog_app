import { Button, Card, CardHeader, TextField } from "@material-ui/core";
import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { styles } from "./Styles";
import { Fields } from "../../consts";
import { useNavigate } from "react-router-dom";
const AddBlogPage = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [id, setId] = useState(uuidv4());
  const navigate = useNavigate();

  const handleInputs = (value, field) => {
    switch (field) {
      case "Title":
        setTitle(value);
        break;

      case "Content":
        setDescription(value);
        break;

      case "Author":
        setAuthor(value);
        break;

      default:
        break;
    }
  };

  const handlePost = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/blog", {
        title: title,
        content: description,
        author: author,
        blogid: id,
        likes: 0,
      })
      .then((res) => console.log(res))
      .finally(() => {
        navigate("/");
      });
  };

  return (
    <form onSubmit={handlePost}>
      <Card style={styles.FormContainer}>
        <CardHeader title={"Add a new post"} />

        {Fields.map((field) => {
          return field === "Content" ? (
            <TextField
              required
              style={styles.contentfield}
              type="text"
              label={field}
              variant="outlined"
              multiline={true}
              minRows={10}
              onChange={(e) => handleInputs(e.target.value, field)}
              key={`${field}_key`}
            />
          ) : (
            <TextField
              required
              style={styles.textfield}
              type="text"
              label={field}
              variant="outlined"
              multiline
              onChange={(e) => handleInputs(e.target.value, field)}
              key={`${field}_key`}
            />
          );
        })}
        <Button type="submit" variant="contained" size="small">
          save
        </Button>
      </Card>
    </form>
  );
};

export default AddBlogPage;
