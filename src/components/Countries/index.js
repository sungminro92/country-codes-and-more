import { useState, useEffect } from 'react'
import CountriesData from '../../CountriesData'
import Country from '../Country'
import style from './style.css'

const Countries = ({ countries, category, order }) => {

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
                var textA = a.countryName.toUpperCase();
                var textB = b.countryName.toUpperCase(); return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;

        }
    }).map((country, index) => {
        switch (category) {
            case 'name':
                return <Country category={category} key={index} code={country.code2} data={country.countryName} />
            case 'code':
                return <Country category={category} key={index} code={country.code2} data={country.code2} />
            case 'currencies':
                return <Country category={category} key={index} code={country.code2} data={country.currency} tld={false} />
            case 'tld':
                return <Country category={category} key={index} code={country.code2} data={country.tld} tld={true} />
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