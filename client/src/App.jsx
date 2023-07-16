import React ,{ useState , useEffect }  from 'react';
import './App.css';
import AllProduct from './componenets/AllProduct/AllProduct.jsx';
import Client from './componenets/Client/Client.jsx';
import Navbar from './componenets/navbar/navbar';
import Seller from "./componenets/seller/Seller";
import AboutUs from './componenets/Aboutus/AboutUs.jsx';
import Home from './componenets/Home/Home';
import axios from "axios"




function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {

    const sellerId = 1
      axios
        .get(`http://localhost:8080/api/product/getAll/${sellerId}`)
        .then((res) => {
          console.log(res.data)
          setData(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    const search = (input) => {
      const filteredData = data.filter((el) =>
        el.productname.toLowerCase().includes(input.toLowerCase())
      );
      setData(filteredData);
      console.log(filteredData);
    }


  return (
    <div className='app' >

      <Navbar search={search}/>

<br/>
<br/>
    {/* <Seller dataa={data}/> */}
    <Home/>
    
    </div>
    
 
    
  );
}

export default App;
