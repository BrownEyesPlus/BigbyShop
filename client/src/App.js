import NavBar from './Share/Components/NavBar/NavBar.js';
import Footer from './Share/Components/Footer/Footer.js';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import './Share/Style/App.css';
import Shop from './Pages/Shop/Shop.js';
import ProductDetail from './Share/Components/ProductDetail/ProductDetail.js';
import BLogsPage from './Pages/BlogsPage/BLogsPage.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Shop/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <ProductDetail/> */}
      <BLogsPage/>
      <Footer/>
    </div>
  );
}

export default App;
