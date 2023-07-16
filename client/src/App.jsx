
import './App.css';
import AllProduct from './componenets/AllProduct/AllProduct.jsx';
import Client from './componenets/Client/Client.jsx';
import Navbar from './componenets/navbar/navbar';
import Seller from "./componenets/seller/Seller";
import AboutUs from './componenets/Aboutus/AboutUs.jsx';
import Register from './componenets/Register/Register.jsx'
import Login from "./componenets/Login/Login.jsx"
import { Box } from '@mui/material';
function App() {
  return (
    <Box  >

      <Navbar/>

<br/>
<br/>
    {/* <Login/> */}
    <Register/>
    </Box>
    
 
    
  );
}

export default App;
