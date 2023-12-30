import { Box, Typography } from "@mui/material";
import "./App.css";
import { MainInterface } from "./components/main-interface/Main-Interface";

function App() {
  return (
    <>
      <Box mb={1}>
        <Typography textAlign={"center"}>Word Solver</Typography>
      </Box>
      <MainInterface />
    </>
  );
}

export default App;
