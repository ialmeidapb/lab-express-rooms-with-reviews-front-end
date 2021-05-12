import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ProductFeed from "../routeComponents/ProductFeed";
import Navbar from "./Navbar";
import ProductCreate from "../routeComponents/ProductCreate";

function App() {
  return (
    <div className="container mt-5">
    
    
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={ProductFeed} />
      <Route exact path="/create" component={ProductCreate} />
      </Switch>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
