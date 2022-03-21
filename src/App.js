import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core';
import theme from "./theme"
import './style.css';
import { useSelector } from "react-redux";
import GlobalStyles from './components/GlobalStyles';
import axiosInterceptorHandler from "./middlewares/axiosInstance";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
function App() {
  axiosInterceptorHandler();
  const content = useRoutes(routes())
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {content}
      </ThemeProvider>
    </StyledEngineProvider>

  );
}

export default App;
