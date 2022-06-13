import { createContext, useContext, useEffect, useState } from 'react'
import Countries from './components/Countries'
import HeaderNav from './components/HeaderNav'
import logo from './logo.svg';
import './App.css';

const CategoryContext = createContext();

function App() {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '61b46edaf2msh44929b4a81a5256p1d70a5jsna6abc9312f65',
      'X-RapidAPI-Host': 'ajayakv-rest-countries-v1.p.rapidapi.com'
    }
  };

  const [allCountries, setAllCountries] = useState("");
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('code')
  const [order, setOrder] = useState(false)

  const clickHandleCategory = (value) => {
    setCategory(value)
    console.log("selected value is:", value)
  }

  function fetchCountries() {

  }

  useEffect(() => {
    fetchCountries();
  }, [])

  return (
    <CategoryContext.Provider value={category} >
      <div className="App">
        <HeaderNav clickHandleCategory={clickHandleCategory} />
        <Countries category={category} order={order} />
      </div>
    </CategoryContext.Provider>
  );
}

export default App;
