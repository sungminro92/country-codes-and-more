import { useState, useRef, useEffect } from 'react'
import { FaRandom } from 'react-icons/fa'
import { IoClose, IoLocationSharp } from 'react-icons/io5'
import './style.css'

const Detail = ({ flag, country, toggleDetailPage, handleRandomCountry }) => {

    const [imgUrl, setimgUrl] = useState("");
    const [selectedCountry, setSelectedCountry] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const elementVariable = useRef(null)

    async function fetchGiphy() {
        let res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=YluprmNz28Ybt3lyiwd7GrJ9AXPySTEm&tag=${country.countryName}&rating=g`)
        let json = await res.json();
        console.log(json.data.embed_url)
        setimgUrl(json.data.images.original.url)
    }

    useEffect(() => {
        setLoading(true)
        fetchGiphy();

        fetch(`https://restcountries.com/v2/alpha/${country.code2}`)
            .then(response => response.json())
            .then(result => {
                if (result.status === 404) {
                    console.log("page not found")
                    setError("Country info not found!")
                    setLoading(true)
                } else {
                    setSelectedCountry(result)
                    console.log(result)
                    setLoading(false)
                }

            })

    }, [country])

    return (
        <div className="detail-page">
            {/* <p> detail page about {country.countryName}</p> */}
            {!loading ? <><img className="detail-page-gif" src={imgUrl} alt="" />
                <div className="detail-page-bg" onClick={() => toggleDetailPage()}></div>
                <div className="detail-info">
                    <FaRandom className="pointer detail-page-random" color="white" size="24" onClick={() => handleRandomCountry()} />
                    <IoClose className="pointer detail-page-close" color="white" size="30" onClick={() => toggleDetailPage()} />
                    <img src={selectedCountry.flag} alt="flag image" />
                    <p className="main-font big-font" >{country.countryName.toUpperCase()}</p>
                    <p className="sub-font medium-font">"{selectedCountry.alpha2Code} / {selectedCountry.alpha3Code} / {selectedCountry.numericCode}"</p>
                    <p className="sub-font small-font"><IoLocationSharp color="white" size={25} />{selectedCountry.region} / {selectedCountry.subregion}</p>
                    <p className="sub-font small-font">their population is about <em>{selectedCountry.population}</em>, has currency in <em>{selectedCountry.currencies[0].name}</em> | <em>{selectedCountry.currencies[0]?.code}</em> | <em>{selectedCountry.currencies[0].symbol}</em>, currently living in <em>{selectedCountry?.timezones[0]}</em>, can be called with <em>+{selectedCountry.callingCodes}</em>, and uses <em>{selectedCountry?.topLevelDomain[0]}</em> as their tld.</p>
                </div></> :
                <>
                    <div className="detail-page-bg" onClick={() => toggleDetailPage()}></div>
                    <div className="detail-info">
                        <FaRandom className="pointer detail-page-random" color="white" size="24" onClick={() => handleRandomCountry()} />
                        <IoClose className="pointer detail-page-close" color="white" size="30" onClick={() => toggleDetailPage()} />
                        <p>{error}</p>
                    </div></>
            }
        </div >
    )
}

export default Detail