import { Route, Switch } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";

function ALlRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/search">
        <h1>Search</h1>
      </Route>
      <Route>
        <h1>Page Not Found</h1>
      </Route>
    </Switch>
  );
}

export default ALlRoutes;
