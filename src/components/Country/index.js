import { toContainElement } from '@testing-library/jest-dom/dist/matchers'
import { useEffect, useState } from 'react'
import './style.css'

const Country = ({ name, code }) => {

    const [displayText, setDisplayText] = useState("")

    let style = {
        backgroundImage: `url("https://countryflagsapi.com/png/${code}")`
    }


    useEffect(() => {
        setDisplayText(code);
    }, [])

    const onMouseEnter = (e) => {
        e.target.style.backgroundColor = "rgba(0, 0, 0, 0)"
        // setDisplayText(name)
    }

    const onMouseLeave = (e) => {
        // e.target.style.fontSize = "45px"
        e.target.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        setDisplayText(code)
    }

    return (
        <div className="country-container" style={style} >
            <div className="img-overlay" onMouseEnter={(e) => onMouseEnter(e)} onMouseLeave={(e) => onMouseLeave(e)}>
                <p className="country-main-text">{displayText}</p>
            </div>
        </div>
    )
}

export default Country