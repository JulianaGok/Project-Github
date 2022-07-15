import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/home";
import UserList from "../pages/user-list";
import UserRepositories from "../pages/user-repositories";

export default function Routes() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Route path="/user-list" component={UserList} />
        <Route path="/user-repositories" component={UserRepositories} />
      </>
    </Router>
  );
}
