import Country from '../Country'
import style from './style.css'

const Countries = ({ countries }) => {

    const displayCountries = countries.sort((a, b) => {
        var textA = a.cca2.toUpperCase();
        var textB = b.cca2.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }).map((country, index) => {
        return <Country key={index} name={country.name.common} code={country.cca2} />
    })

    return (
        <div className="countries-container">
            {displayCountries}
        </div>
    )
}

export default Countries