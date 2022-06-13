import { useState, useEffect } from 'react'
import CountriesData from '../../CountriesData'
import Country from '../Country'
import style from './style.css'

const Countries = ({ handleClickCountry, category, order }) => {

    const [c, setC] = useState("name");

    useEffect(() => {
        setC(category);
        console.log("changed category", category)
    }, [category])

    const displayCountries = CountriesData.sort((a, b) => {
        switch (category) {
            case 'name':
                var textA = a.countryName.toUpperCase();
                var textB = b.countryName.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            case 'code':
                var textA = a.code2.toUpperCase();
                var textB = b.code2.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            case 'currencies':
                var textA = a.currency.toUpperCase();
                var textB = b.currency.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            case 'tld':
                var textA = a.tld.toUpperCase();
                var textB = b.tld.toUpperCase(); return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            case 'dialCode':
                return b[0] - a[0]
        }
    }).map((country, index) => {
        switch (category) {
            case 'name':
                return <Country category={category} key={index} country={country} data={country.countryName} tld={false} handleClickCountry={handleClickCountry} />
            case 'code':
                return <Country category={category} key={index} country={country} data={country.code2} tld={false} handleClickCountry={handleClickCountry} />
            case 'currencies':
                return <Country category={category} key={index} country={country} data={country.currency} tld={false} handleClickCountry={handleClickCountry} />
            case 'tld':
                return <Country category={category} key={index} country={country} data={country.tld} tld={true} handleClickCountry={handleClickCountry} />
            case 'dialCode':
                return <Country category={category} key={index} country={country} data={country.phoneCode[0]} tld={false} handleClickCountry={handleClickCountry} />
        }
    })

    //    CountriesData.sort((a, b) => {
    //         switch (category) {
    //             case 'code':
    //               
    //             case 'name':
    //                 var textA = a.countryName.toUpperCase();
    //                 var textB = b.countryName.toUpperCase();
    //                 return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    //             case 'currencies':
    //                 return a.currency - b.currency
    //             case 'tld':
    //                 var textA = a.tld.toUpperCase();
    //                 var textB = b.tld.toUpperCase();
    //                 return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    //             default:
    //                 return a.countryName - b.countryName
    //         }
    //     }).

    return (
        <div className="countries-container">
            {displayCountries}
        </div>
    )
}

export default Countries