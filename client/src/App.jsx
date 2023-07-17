import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AllProduct from './componenets/AllProduct/AllProduct.jsx';
import Client from './componenets/Client/Client.jsx';
import Navbar from './componenets/navbar/navbar';
// import Seller from "./componenets/seller/Seller";
import AboutUs from './componenets/Aboutus/AboutUs.jsx';
import PersonalCollection from './componenets/PersonalCollection/PersonalCollection.jsx';

function App() {
  return (
    <div className='app'>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/profile" element={<Client/>}/>
      <Route path="/home" element={<AllProduct />}/>
      <Route path="/PersonalCollection" element={<PersonalCollection/>}/>
      {/* <Route path="/login" element={<Login />}/>
      <Route path="/reservation" element={<Reservation/>}/>
      <Route path="/one" element={<OneService />}/>  */}
    </Routes> 

    </BrowserRouter>
    </div>
    
 
    
  );
}

export default App;


// const [data, setData] = useState([]);

// useEffect(() => {
//   fetch();
// }, []);

// const fetch = () => {

//   const sellerId = 1
//     axios
//       .get(`http://localhost:8080/api/product/getAll/${sellerId}`)
//       .then((res) => {
//         console.log(res.data)
//         setData(res.data)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }

//   const search = (input) => {
//     const filteredData = data.filter((el) =>
//       el.productname.toLowerCase().includes(input.toLowerCase())
//     );
//     setData(filteredData);
//     console.log(filteredData);
//   }