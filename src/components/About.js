import './about.css'
import { useState, useEffect } from 'react'

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
            <div className="about-page-overlay"></div>
            about page
        </div>
    )
}

export default About