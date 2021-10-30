import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import AddNewService from './components/AddNewService/AddNewService';
import Login from './components/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import NotFound from './components/NotFound/NotFound';
import OrderConfirm from './components/OrderConfirm/OrderConfirm';
import ManageAllServices from './components/Dashborad/ManageAllProducts/ManageAllServices';
import UpdateService from './components/Dashborad/UpdateService/UpdateService';
import MyOrders from './components/MyOrders/MyOrders/MyOrders';
import Footer from './components/Shared/Footer/Footer';



function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/addnewservice">
              <AddNewService></AddNewService>
            </PrivateRoute>
            <PrivateRoute path="/placeorder/:serviceId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <ManageAllServices></ManageAllServices>
            </PrivateRoute>
            <PrivateRoute path="/services/updateservice/:id">
              <UpdateService></UpdateService>
            </PrivateRoute>
            <PrivateRoute path="/orderconfirm">
              <OrderConfirm></OrderConfirm>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
