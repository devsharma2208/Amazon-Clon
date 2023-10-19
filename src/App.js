import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
// import { initialState } from "./reducer";
function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
