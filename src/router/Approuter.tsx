import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn, Main, UserDetails } from "../pages";
import AuthChecker from "./AuthCheck";
import useSearchUsers from "../hooks/useSearhUsers";
import useParams from "../hooks/useParams";
import { useSelector } from "react-redux";
import { IRootState } from "../store/index";
import { SettingsProfile } from "../pages";

const AppRouter: React.FunctionComponent = () => {
  const { setUserItems } = useSearchUsers();
  const { getParams } = useParams();
  const users = useSelector((state: IRootState) => state.userItem.userItems);
  const inputValue = useSelector(
    (state: IRootState) => state.searchReduser.search
  );

  useEffect(() => {
    setUserItems();
  }, [inputValue]);

  useEffect(() => {
    getParams();
  }, [users]);

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
        <Route
          path="/:settings"
          element={
            <AuthChecker>
              <SettingsProfile />
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
