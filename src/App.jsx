import React, { useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import AppRoutes from "./routes";
import { generateTheme } from "./theme";

function App() {
  const [primaryColor, setPrimaryColor] = useState("#00aeef");

  const theme = useMemo(() => generateTheme(primaryColor), [primaryColor]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
