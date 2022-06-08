import Country from '../Country'
import style from './style.css'

const Countries = ({ countries }) => {

    const displayCountries = countries.map(country => {
        return <Country name={country.name.common} code={country.cca2} />
    })

    return (
        <div className="countries-container">
            {displayCountries}
        </div>
    )
}

export default Countries