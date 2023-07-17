import "./App.css";
import DataGridProDemo from "./Component/Admin/Admin.jsx";
import Navbar from "./Component/navbar/navbar";
import AppAdmin from "./Component/Admin/AdminLayout";
import Header from "./Component/Admin/Header";
import LoginAdmin from "./Component/Admin/LoginAdmin";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/*<LoginAdmin />*/}
      <Header />
      <DataGridProDemo />
    </div>
  );
}

export default App;
