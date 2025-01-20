import { Route, Routes } from "react-router";
import Home from "./layouts/Home/Home";
import DailyRecord from "./layouts/DailyRecord/DailyRecord";
import { routes } from "./routes/routes";
import "./App.css";

function App() {
  return (
    <Routes>
      {routes.map(({ path, component, pageName }) => (
        <Route path={path} element={component} key={pageName} />
      ))}
    </Routes>
  );
}

export default App;
