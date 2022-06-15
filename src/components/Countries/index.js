import { useState, useEffect, useContext } from 'react'
import CountriesData from '../../CountriesData'
import Country from '../Country'
import style from './style.css'
import { DataContext } from '../../App'

const Countries = ({ handleClickCountry, category, order }) => {
    const data = useContext(DataContext);
    const [c, setC] = useState("name");
    const [countries, setCountries] = useState(CountriesData)

    useEffect(() => {
        setC(category);
        console.log("changed category", category)
    }, [category])

    useEffect(() => {

    })

    console.log("some data?", data.inputVal)

    const displayCountries = countries.sort((a, b) => {
        switch (category) {
            case 'code':
                var textA = a.code2.toUpperCase();
                var textB = b.code2.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            case 'tld':
                var textA = a.tld.toUpperCase();
                var textB = b.tld.toUpperCase(); return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            case 'dialCode':
                return a.phoneCode[0] - b.phoneCode[0]
        }
    }).filter((country) => {
        if (data.inputVal) {
            return country.code2.toUpperCase().includes(data.inputVal.toUpperCase()) || country.countryName.toUpperCase().includes(data.inputVal.toUpperCase())
        } else {
            return country
        }
    }).map((country, index) => {
        switch (category) {
            case 'code':
                return <Country category={category} key={index} country={country} data={country.code2} tld={false} handleClickCountry={handleClickCountry} />
            case 'tld':
                return <Country category={category} key={index} country={country} data={country.tld} tld={true} handleClickCountry={handleClickCountry} />
            case 'dialCode':
                return <Country category={category} key={index} country={country} data={country.phoneCode[0]} tld={false} handleClickCountry={handleClickCountry} />
        }
    })



    return (
        <div className="countries-container">
            {displayCountries}
        </div>
    )
}

export default Countries