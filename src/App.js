import Headers from "./layout/Header";
import Main from "./layout/Main";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#DA1A33",
      contrastText: "#fff",
    },
    background: {
      default: "#282828",
      paper: "#282828",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Headers />
      <Main />
    </ThemeProvider>
  );
}

export default App;
