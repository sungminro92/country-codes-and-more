import { useState, useEffect } from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

const HeaderNav = () => {
    const [selected, setSelected] = useState('')

    const clickSelect = (e) => {
        setSelected(e.target.id)
    }

    return (
        <div className="header-nav">
            <ul>
                <li name="name" >name</li>
                <li id="code">code</li>
                <li id="currencies">currencies</li>
                <li id="population">population</li>
                <li id="tld">tld</li>
            </ul>
        </div >
    )
}

export default HeaderNav