import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles(() => ({
    logo: {
        fontWeight: 700,
        textDecoration: "none",
        marginRight:'20px',
        color: 'black',
      },
    navlink: {
        textDecoration: "none",
        color: 'black',
        marginRight:'20px',
      },
    appBar: {
      backgroundColor: "#fff",
    },
    SearchBar:{
      boxShadow:"none"
    }
  }));
