import "./App.css";
import DataGridProDemo from "./Component/Admin/Admin.jsx";
import Navbar from "./Component/navbar/navbar";
import AppAdmin from "./Component/Admin/AdminLayout";
import Header from "./Component/Admin/Header";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AppAdmin />
      <DataGridProDemo />
    </div>
  );
}

export default App;
