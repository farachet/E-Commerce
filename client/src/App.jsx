
import './App.css';
import AllProduct from './componenets/AllProduct/AllProduct.jsx';
import Client from './componenets/Client/Client.jsx';
import Navbar from './componenets/navbar/navbar';
import Seller from "./componenets/seller/Seller";
import AboutUs from './componenets/Aboutus/AboutUs.jsx';
import ShopCart from './componenets/AllProduct/ShopCart/ShopCart.jsx';


function App() {
  return (
    <Box  >

      <Navbar/>

    {/* <Client />
<br/>
<br/>
    <Seller/> */}
    <AllProduct/>
    </div>
    
 
    
  );
}

export default App;
