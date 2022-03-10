import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Login from "./routes/Login";
import AboutUs from "./routes/AboutUs";
import Dashboard from "./routes/Dashboard";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
