
import './App.css';
import AllProduct from './componenets/AllProduct/AllProduct.jsx';
import Client from './componenets/Client/Client.jsx';
import Navbar from './componenets/navbar/navbar';
import Seller from "./componenets/seller/Seller";
import AboutUs from './componenets/Aboutus/AboutUs.jsx';
import ShopCart from './componenets/AllProduct/ShopCart/ShopCart.jsx';


function App() {
  return (
    <div className='app' >

      <Navbar/>

    {/* <Client />
<br/>
<br/>
    <Seller/> */}
    {/* <AllProduct/> */}
    <AboutUs/>
    </div>
    
 
    
  );
}

export default App;
