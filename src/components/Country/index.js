import { toContainElement } from '@testing-library/jest-dom/dist/matchers'
import { useEffect, useState, useContext } from 'react'
import CategoryContext from '../../App'
import './style.css'

const Country = ({ data, country, handleClickCountry }) => {

    const [displayText, setDisplayText] = useState("")

    let url = `https://countryflagsapi.com/png/${country.code2}`
    let style = {
        backgroundImage: `url(${url})`
    }

    // console.log("data on country", data)
    return (
        <div className="country-container" style={style} onClick={() => handleClickCountry(country, url)}>
            {/* <div className="img-overlay pointer" onMouseEnter={(e) => onMouseEnter(e)} onMouseLeave={(e) => onMouseLeave(e)}> */}
            <div className="img-overlay pointer" >
                <p className="huge-font main-font">{data}</p>
            </div>
        </div >
    )
}

export default Country