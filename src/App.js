import './App.css';
import React, { useState } from "react";
import Carousel from './components/Carousel';
import Search from './components/Search';
import Card from './components/Card';
import SearchResult from './components/SearchResult';
import Select from './components/Select';
import { SearchBox } from './components/Styled';
import products from './data/products.json';
import categories from './data/categories.json';


function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  return (
    <div className="App">
      <SearchBox>
        <Search search={setSearch} />
        <Select
          change={setCategory}
          options={categories}
        />
      </SearchBox>
      {!search &&
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
        />}
      {search &&
        <SearchResult
          searched={search}
          items={products}
          category={category} />
      }
    </div>
  );
}

export default App;
