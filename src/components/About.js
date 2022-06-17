import './about.css'
import { useState, useEffect } from 'react'
import { IoClose } from 'react-icons/io5'

const About = ({ toggleAboutPage }) => {
    const [giphy, setGiphy] = useState("")
    async function fetchGiphy() {
        let res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=YluprmNz28Ybt3lyiwd7GrJ9AXPySTEm&tag=coding&rating=g`)
        let json = await res.json();
        console.log(json.data.embed_url)
        setGiphy(json.data.images.original.url)
    }

    useEffect(() => {
        fetchGiphy()
    }, [])

    return (
        <div className="about-page" onClick={() => toggleAboutPage()}>
            <img src={giphy} alt="" />
            <div className="about-page-overlay">
                <div className="about-info">
                    <IoClose className="pointer detail-page-close" color="white" size="30" onClick={() => toggleAboutPage()} />
                    <h1 className="main-font big-font">About</h1>
                    <h3 className="main-font small-font">What is the Country Code?</h3>
                    <p><strong>Country codes</strong> are short alphabetic, 2-letter(alpha-2) and 3-letter(alpha-3) or numeric geographica codes developed to represent countries and dependent territories, developed by the <a href="https://en.wikipedia.org/wiki/International_Organization_for_Standardization">International Organization for Standarization(ISO)</a></p>
                    <h3 className="main-font small-font">Who cares about these?</h3>
                    <p>These codes are the most used standards in data processing and written communications as well as for top-level domain(tld) on the web.</p>
                    <p>Although it's not important or super neccessary for us to know about these codes, WHY NOT HAVE FUN, EXPLORE, and LEARN some facts about each country!</p>
                    <h3 className="main-font small-font">Site informations:</h3>
                    <p>This site is made by: <a href="https://sungminro92.github.io/">Sungmin Ro</a></p>
                    <p>With the help of:</p>
                    <a href="https://restcountries.com/#rest-countries"><p>REST Countries API</p></a>
                    <a href="https://countrycode.org/"><p>CountryCode.org</p></a>
                    <a href="https://giphy.com/"><p>Giphy API</p></a>
                    <a href="https://www.countryflagsapi.com/"><p>Country Flags API</p></a>
                </div>
            </div>
        </div >
    )
}

export default About