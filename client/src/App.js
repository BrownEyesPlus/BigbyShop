import NavBar from './Share/Components/NavBar/NavBar.js';
import Footer from './Share/Components/Footer/Footer.js';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import './Share/Style/App.css';
import Shop from './Pages/Shop/Shop.js';
import ProductDetail from './Share/Components/ProductDetail/ProductDetail.js';
import BLogsPage from './Pages/BlogsPage/BLogsPage.js';
import BLogDetail from './Pages/BlogDetail/BLogDetail.js';
import Purchase from './Pages/Purchase/Purchase.js';
import Profile from './Pages/Profile/Profile.js';
import Cart from './Share/Components/Cart/Cart.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <NavBar/>
      <Router>
        <Switch>
          <Route exact path="/"> 
            <Home/>
          </Route>

          <Route exact path="/shop"> 
            <Shop/>
          </Route>

          <Route exact path="/favourite"> 
            <Shop/>
          </Route>

          <Route exact path="/register"> 
            <Register/>
          </Route>
          
          <Route exact path="/login"> 
            <Login/>
          </Route>

          <Route exact path="/blogspage"> 
            <BLogsPage/>
          </Route>

          <Route exact path="/blogdetail/"> 
            <BLogDetail/>
          </Route>

          <Route exact path="/purchase"> 
            <Purchase/>
          </Route>

          <Route exact path="/profile"> 
            <Profile/>
          </Route>

        </Switch>
      </Router>

      {/* <ProductDetail/> */}
      {/* <Cart/> */}
      <Footer/>
    </div>
  );
}

export default App;
