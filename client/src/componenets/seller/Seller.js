// import React, { useEffect, useState } from "react";
// import AddProducts from "./AddProduct";
// import Products from "./Product.js";
// import axios from "axios";

// const Seller = () => {
//     const [data, setData] = useState([]);
//     const [refrech, setRefrech] = useState(false);

//     useEffect(() => {
//         fetch()
//       }, [refrech])

//     const fetch = () => {
//         axios
//           .get("http://localhost:3000/api/product/getAll")
//           .then((res) => {
//             console.log(res.data)
//             setData(res.data)
//           })
//           .catch((err) => {
//             console.log(err)
//           })
//       }

//       const AddNewProduct = () => {
//         const newProduct = {
//           productname: productname,
//           price: price,
//           reference: reference,
//           image: image,
//           status: status,
        
//         };
        
//         axios
//         .post("http://localhost:3000/api/product/AddProduct" , newProduct)
//         .then((res) => {
//           console.log(res.data)
//           setData(res.data)
//           setRefrech(!refrech)
//         })
//         .catch((err) => {
//           console.log(err)
//         })

//       }
//       const deleteOneproduct = (id) => {
// axios
//      .delete(`http://localhost:3000/api/product/deleteByid/${id}`)
//      .then(() => {
//       setRefrech(!refrech)
//      })
//      .catch((err) => {
//       console.log(err)
//      })

//       }
//       const UpdateProduct = (id , productname , price , reference , image , status) => {
//        axios.put(`http://localhost:3000/api/product/deleteByid/${id}` , {

//        productname: productname,
//        price: price,
//        reference: reference,
//        image: image,
//        status: status,

//        })
//        .then(() => {
//         setRefrech(!refrech)
//        })

//       }
      
//   return (
//     <div>
//       <Products data={data} UpdateProduct={UpdateProduct} deleteOneproduct={deleteOneproduct} />
//       <AddProducts  AddNewProduct={AddNewProduct}/>
//     </div>
//   );
// };

// export default Seller;
