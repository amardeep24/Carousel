import './App.css';
import React, { useState } from "react";
import Carousel from './components/Carousel';
import Search from './components/Search';
import products from './data/products.json';

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Search search={setSearch} />
      <Carousel searched={search} items={products} />
    </div>
  );
}

export default App;
