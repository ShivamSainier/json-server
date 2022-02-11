import {useRoutes} from "react-router-dom";
import routes from "./routes";
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core';
import theme from "./theme"

function App() {
  const content=useRoutes(routes())
  return (
    <ThemeProvider theme={theme}>
       {content}
      </ThemeProvider>
   
  );
}

export default App;
