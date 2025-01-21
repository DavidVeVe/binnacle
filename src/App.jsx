import { Route, Routes } from "react-router";
import { routes } from "./routes/routes";
import { Suspense } from "react";
import "./App.css";

function App() {
  const RoutesComponents = routes.map(({ path, component, pageName }) => (
    <Route path={path} element={component} key={pageName} />
  ));

  const loading = <p className="loading">Loading...</p>;

  return <Routes>{RoutesComponents}</Routes>;
}

export default App;
