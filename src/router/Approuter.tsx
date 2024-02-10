import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { SignIn, Main, UserDetails } from "../pages";
import AuthChecker from "./AuthCheck";

const AppRouter: React.FunctionComponent = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/sign-in"
          element={
            <AuthChecker>
              <SignIn />
            </AuthChecker>
          }
        />
        <Route
          path="/"
          element={
            <AuthChecker>
              <Main />
            </AuthChecker>
          }
        />
        <Route
          path="/:id"
          element={
            <AuthChecker>
              <UserDetails />
            </AuthChecker>
          }
        />
        {/* <Route
          path="*"
          element={
            <AuthChecker>
              <Navigate to="/" />
            </AuthChecker>
          }
        /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
