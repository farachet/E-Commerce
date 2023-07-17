import "./App.css";
import DataGridProDemo from "./Component/Admin/Admin.jsx";
import Navbar from "./Component/navbar/navbar";
import AppAdmin from "./Component/Admin/AdminLayout";
import Header from "./Component/Admin/Header";
import ManageClient from "./Component/Admin/ManageClient.jsx"
import ManageSeller from "./Component/Admin/ManageSellers.jsx"
import Products from "./Component/Admin/Products.jsx";
import { useState } from "react";
import RequestProd from "./Component/Admin/RequestProd.jsx";

function App() {
  const[view,setView]=useState("client")
  const setproduct=()=>{
    setView("product")
  }  
  const setcategory=()=>{
    setView("category")
  }  
  const setSeller=()=>{
    setView("seller")
  }
  const setClient=()=>{
    setView("client")
  }
  const setRequests=()=>{
    setView("requests")
  }
  return (
    <div className="App">
      <Navbar />
      <Header setcategory={setcategory} setproduct={setproduct} setRequests={setRequests} setSeller={setSeller} setClient={setClient}/>
      
      
      {view === 'category' &&<DataGridProDemo/>}
      {view === 'seller' &&<ManageSeller/>}
      {view === 'client' &&<ManageClient/>}
      {view === 'product' &&<Products/>}
      {view === 'requests' &&<RequestProd/>}
      
      
      
    </div>
  );
}

export default App;
