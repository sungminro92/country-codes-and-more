import './style.css'

const Detail = ({ country, handleClick, handleRandomCountry }) => {
    return (
        <div className="detail-page"  >
            {/* <p> detail page about {country.countryName}</p> */}
            < div className="detail-page-bg" onClick={() => handleClick()}></div >
            <div className="detail-info">
                <p onClick={() => handleRandomCountry()}>get a random Country</p>
                <p>country name: {country.countryName}</p>
                <p>code2: {country.code2}</p>
                <p>code3: {country.code3}</p>
            </div>
        </div >
    )
}

export default Detail