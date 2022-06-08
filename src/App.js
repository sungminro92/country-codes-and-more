import { useEffect, useState } from 'react'
import Countries from './components/Countries'
import HeaderNav from './components/HeaderNav'
import logo from './logo.svg';
import './App.css';

function App() {

  const [allCountries, setAllCountries] = useState("");
  const [loading, setLoading] = useState(true)

  async function fetchCountries() {
    try {
      let res = await fetch("https://restcountries.com/v3.1/all")
      let json = await res.json()
      console.log(json);
      setAllCountries(json)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    fetchCountries();
  }, [])

  return (
    <div className="App">
      <HeaderNav />
      {!loading ? <Countries countries={allCountries} /> : <p>loading...</p>}
    </div>
  );
}

export default App;
