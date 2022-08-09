import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Header from "./components/Header"
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route exact path="/" element={<ProductListing/>}/>
      <Route exact path="/products/:productId" element={<ProductDetails/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
