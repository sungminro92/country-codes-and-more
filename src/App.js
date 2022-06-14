import { createContext, useContext, useEffect, useState } from 'react'
import Countries from './components/Countries'
import HeaderNav from './components/HeaderNav'
import logo from './logo.svg';
import './App.css';
import Detail from './components/Detail'
import CountriesData from './CountriesData';
import { IconContext } from "react-icons";

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
  const [selectedCountry, setSelectedCountry] = useState("");
  const [detailPage, setDetailPage] = useState(false);
  const [flagUrl, setFlagUrl] = useState("")

  const clickHandleCategory = (value) => {
    setCategory(value)
    console.log("selected value is:", value)
  }

  const handleClickCountry = (country, flagUrl) => {
    setDetailPage(!detailPage);
    setSelectedCountry(country)
    setFlagUrl(flagUrl)
  }

  const toggleDetailPage = () => {
    setDetailPage(!detailPage)
  }


  const handleRandomCountry = () => {
    let randomNum = Math.floor(Math.random() * CountriesData.length)
    let randomCountry = CountriesData[randomNum];
    setSelectedCountry(randomCountry)
    setFlagUrl(`https://countryflagsapi.com/png/${randomCountry.code2}`)
  }



  return (
    <CategoryContext.Provider value={category} >
      <IconContext.Provider value={{ color: "white", className: "react-icons-all" }}>
        <div className="App">
          {detailPage ? <Detail flag={flagUrl} country={selectedCountry} toggleDetailPage={toggleDetailPage} handleRandomCountry={handleRandomCountry} /> : null}
          <HeaderNav clickHandleCategory={clickHandleCategory} />
          <Countries category={category} order={order} handleClickCountry={handleClickCountry} />
        </div>
      </IconContext.Provider>
    </CategoryContext.Provider>
  );
}

export default App;
