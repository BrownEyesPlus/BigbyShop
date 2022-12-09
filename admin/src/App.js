import './Share/Style/App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import SideBar from './Share/Components/SideBar/SideBar';
import TopBar from './Share/Components/TopBar/TopBar';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Inputs from './Pages/Input/Inputs';
import Orders from './Pages/Orders/Orders';
import OrderDetail from './Share/Components/OrderDetail/OrderDetail';

function App() {
  return (
    <div className="App">
      <SideBar />
      <div style={{ width: 'calc(100% - 260px)', backgroundColor: '#E8E8E8' }}>
        <TopBar />
        <Router>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/products">
              <Products />
            </Route>

            <Route exact path="/inputs">
              <Inputs />
            </Route>

            <Route exact path="/orders">
              <Orders />
            </Route>

            <Route exact path="/orderdetail/:id">
              <OrderDetail />
            </Route>

          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
