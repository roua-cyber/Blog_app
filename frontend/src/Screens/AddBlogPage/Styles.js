import { styled } from "@material-ui/core";

export const styles = {
  textfield: {
    width: "100%",
    margin: "5px",
    textAlign: "center",
  },
  contentfield: {
    width: "100%",
    margin: "5px",
    textAlign: "center",
  },
  FormContainer: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    margin: "5rem auto",
    padding: "2rem",
    width: "25%",
    borderRadius: "2%",
  },
  link: {
    textDecoration: "none",
  },
};

export const FormContainer = styled("div")({
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
});
