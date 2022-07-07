import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./containers/Header";
import { ProductListing } from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" eaxact element={<ProductListing />} />
          <Route
            path="/product/:productId"
            eaxact
            element={<ProductDetail />}
          />
          <Route>404 not found</Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
