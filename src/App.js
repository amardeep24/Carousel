import './App.css';
import React, { useState } from "react";
import Carousel from './components/Carousel';
import Search from './components/Search';
import Card from './components/Card';
import products from './data/products.json';

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Search search={setSearch} />
      <Carousel
        items={products}
        renderFn={(item, idx) => <Card
          key={item.id}
          title={item.name}
          subHeader={item.price}
          header={process.env.PUBLIC_URL + item.img}
          footer={item.category}
          active={idx === 1}
          left={idx === 0}
        />}
        searched={search}
        filterProp={"category"} />
    </div>
  );
}

export default App;
