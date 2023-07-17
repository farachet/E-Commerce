import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const ecommerceContext = createContext();
const EcommerceContextProvider = (props) => {
    const [currentUser,setCurrentUser]=useState({})
    const [data, setData] = useState([]); 
    const [refresh,setRefrech]=useState(false)
    const search = (input) => {
      const filteredData = data.filter((el) =>
        el.productname.toLowerCase().includes(input.toLowerCase())
      );
      setData(filteredData);
   
      console.log("fileterrr")
      setRefrech(!refresh)
    }
    useEffect(()=>{
        fetch()
    },[refresh])
    const fetch = () => {

      const sellerId = currentUser.id
      console.log("haw lenééééééé a",sellerId)
        axios
          .get(`http://localhost:3001/api/product/getAll/${sellerId}`)
          .then((res) => {
            console.log(res.data)
            setData(res.data)
          })
          .catch((err) => {
            console.log(err)
          })
      }
  

    const handleUser=(user)=>{
      
      setCurrentUser(user)
    }


    const contextValue={
      currentUser,
      handleUser,
      data,
      search
      
    
    }
    return (
        <ecommerceContext.Provider value={contextValue}>
          {props.children}
        </ecommerceContext.Provider >
      );



}
export default EcommerceContextProvider