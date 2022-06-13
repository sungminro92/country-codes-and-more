import { toContainElement } from '@testing-library/jest-dom/dist/matchers'
import { useEffect, useState, useContext } from 'react'
import CategoryContext from '../../App'
import './style.css'

const Country = ({ data, code, tld, category }) => {
    // const category = useContext(CategoryContext)

    const [displayText, setDisplayText] = useState("")

    let style = {
        backgroundImage: `url("https://countryflagsapi.com/png/${code}")`
    }

    const onMouseEnter = (e) => {
        e.target.style.backgroundColor = "rgba(0, 0, 0, 0)"
        // setDisplayText(name)
    }

    const onMouseLeave = (e) => {
        // e.target.style.fontSize = "45px"
        e.target.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        // setDisplayText(code)
    }

    // console.log("data on country", data)
    return (
        <div className="country-container" style={style} >
            {/* <div className="img-overlay pointer" onMouseEnter={(e) => onMouseEnter(e)} onMouseLeave={(e) => onMouseLeave(e)}> */}
            <div className="img-overlay pointer" onClick={() => console.log(data)}>
                {tld ? `.${data}` : data}
            </div>
        </div>
    )
}

export default Country