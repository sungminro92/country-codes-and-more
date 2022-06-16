import { createContext, useContext, useEffect, useState } from 'react'
import Countries from './components/Countries'
import HeaderNav from './components/HeaderNav'
import logo from './logo.svg';
import './App.css';
import Detail from './components/Detail'
import CountriesData from './CountriesData';
import { IconContext } from "react-icons";
import About from './components/About'


export const DataContext = createContext();

function App() {


  const [allCountries, setAllCountries] = useState("");
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('code2')
  const [order, setOrder] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState("");
  const [detailPage, setDetailPage] = useState(false);
  const [aboutPage, setAboutPage] = useState(false);
  const [flagUrl, setFlagUrl] = useState("")
  const [inputVal, setInputVal] = useState("")
  const [width, setWindowWidth] = useState(0);
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const handleChangeInput = (value) => {
    setInputVal(value);
  }

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

  const toggleAboutPage = () => {
    console.log(aboutPage)
    setAboutPage(!aboutPage)
  }

  const data = {
    category,
    inputVal,
    width
  }
  const handleRandomCountry = () => {
    let randomNum = Math.floor(Math.random() * CountriesData.length)
    let randomCountry = CountriesData[randomNum];
    setSelectedCountry(randomCountry)
    setFlagUrl(`https://countryflagsapi.com/png/${randomCountry.code2}`)
  }

  return (
    <DataContext.Provider value={data} >
      <IconContext.Provider value={{ color: "white", className: "react-icons-all" }}>
        <div className="App">
          {detailPage ? <Detail flag={flagUrl} country={selectedCountry} toggleDetailPage={toggleDetailPage} handleRandomCountry={handleRandomCountry} /> : null}
          {aboutPage ? <About toggleAboutPage={toggleAboutPage} /> : null}
          <HeaderNav handleChangeInput={handleChangeInput} clickHandleCategory={clickHandleCategory} toggleAboutPage={toggleAboutPage} />
          <Countries category={category} order={order} handleClickCountry={handleClickCountry} />
        </div>
      </IconContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
