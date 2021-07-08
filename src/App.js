import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Topbar from "./Components/Topbar/Topbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import UserList from "./Pages/UserList/UserList.jsx";
import User from "./Pages/User/User.jsx";
import NewUser from "./Pages/NewUser/NewUser.jsx";
import ProductList from "./Pages/ProductList/ProductList.jsx";
import Product from "./Pages/Product/Product.jsx";
import NewProduct from "./Pages/NewProduct/NewProduct.jsx";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/newUser">
              < NewUser />
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/newProduct">
              <NewProduct />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
