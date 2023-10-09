import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/signupPage/SignupPage";
import SignInPage from "./pages/signinPage/SignInPage";
import SignupPagePlans from "./pages/signupPage/SignupPagePlans";
import SignupPagePlanDesc from "./pages/signupPage/SignupPagePlanDesc";
import SignupPayment from "./pages/signupPage/SignupPayment";
import HomePage from "./pages/homePage/HomePage";
import WatchlistPage from "./pages/WatchlistPage/WatchlistPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { Provider } from "react-redux";
import store from "./store";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/movieDetailsPage/MovieDetailsPage";
import ForgotPasswordPage from "./pages/forgotPasswordPage/ForgotPasswordPage";
import UserPreferencePage from "./pages/signupPage/userPreferencePage/UserPreferencePage";
import SearchResultPage from "./pages/searchResultPage/SearchResultPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Provider store={store}>
              <SignInPage />
            </Provider>
          }
        />
        <Route
          path="/signup"
          element={
            <Provider store={store}>
              <SignupPage />
            </Provider>
          }
        />
        <Route
          path="/signup/plans"
          element={
            <Provider store={store}>
              <SignupPagePlans />
            </Provider>
          }
        />
        <Route
          path="/signup/plans/details"
          element={
            <Provider store={store}>
              <SignupPagePlanDesc />
            </Provider>
          }
        />
        <Route
          path="/signup/payment"
          element={
            <Provider store={store}>
              <SignupPayment />
            </Provider>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Provider store={store}>
              <SignInPage />
            </Provider>
          }
        />
        <Route
          path="/home"
          element={
            <Provider store={store}>
              <HomePage />
            </Provider>
          }
        />
        <Route
          path="/watchlist"
          element={
            <Provider store={store}>
              <WatchlistPage />
            </Provider>
          }
        />
        <Route
          path="/profile"
          element={
            <Provider store={store}>
              <ProfilePage />
            </Provider>
          }
        />
        <Route
          path="/movies"
          element={
            <Provider store={store}>
              <MoviesPage />
            </Provider>
          }
        />
        <Route
          path="/movies"
          element={
            <Provider store={store}>
              <MoviesPage />
            </Provider>
          }
        />
        <Route
          path="/description/:mediaid"
          element={
            <Provider store={store}>
              <MovieDetailsPage />
            </Provider>
          }
        />
        <Route
          path="/user-preference"
          element={
            <Provider store={store}>
              <UserPreferencePage />
            </Provider>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <Provider store={store}>
              <ForgotPasswordPage />
            </Provider>
          }
        />
        <Route
          path="/search/:query"
          element={
            <Provider store={store}>
              <SearchResultPage />
            </Provider>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
