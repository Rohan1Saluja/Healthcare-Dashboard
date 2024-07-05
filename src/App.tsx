import { ThemeProvider } from "@mui/material";
import { theme } from "./components/utils/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
