import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";

import Layoute from "./Layoute";

export const Privaitroute = ({ children, ...rest }) => {
  const token = sessionStorage.getItem("auth");
  return (
    <Route
      {...rest}
      render={({ location }) => (token ? children : <Redirect to="/login" />)}
    />
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Layoute />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
