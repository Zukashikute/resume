import React, { useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";

const AppRoutes = () => {
  // Stop the auto scroll to top while the page still rendering
  const { scrollX, scrollY } = window;
  useLayoutEffect(() => {
    window.scrollTo(scrollX, scrollY);
  });

  return (
    <>
      <BrowserRouter basename="/resume">
        <Routes>
          {routes.map(({ key, path, element: Element }) => (
            <Route key={key} path={path} element={<Element />} />
          ))}
          <Route
            path="/healthcheck"
            element={<h3>Hey There!!! The App is Healthy</h3>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
