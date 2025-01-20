import { Route, Routes } from "react-router";
import { routes } from "./routes/routes";
import "./App.css";

function App() {
  const RoutesComponents = routes.map(({ path, component, pageName }) => (
    <Route path={path} element={component} key={pageName} />
  ));

  return <Routes>{RoutesComponents}</Routes>;
}

export default App;
