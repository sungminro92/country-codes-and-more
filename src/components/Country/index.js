import { toContainElement } from '@testing-library/jest-dom/dist/matchers'
import { useEffect, useState, useContext } from 'react'
import CategoryContext from '../../App'
import './style.css'

const Country = ({ data, country, tld, handleClickCountry }) => {
    // const category = useContext(CategoryContext)

    const [displayText, setDisplayText] = useState("")

    let style = {
        backgroundImage: `url("https://countryflagsapi.com/png/${country.code2}")`
    }


    // console.log("data on country", data)
    return (
        <div className="country-container" style={style} >
            {/* <div className="img-overlay pointer" onMouseEnter={(e) => onMouseEnter(e)} onMouseLeave={(e) => onMouseLeave(e)}> */}
            <div className="img-overlay pointer" onClick={() => handleClickCountry(country)}>
                {tld ? `.${data}` : data}
            </div>
        </div >
    )
}

export default Country