import { useState, useEffect } from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

const HeaderNav = ({ clickHandleCategory }) => {
    const [selected, setSelected] = useState('')

    const clickSelect = (e) => {
        setSelected(e.target.id)
    }

    return (
        <div className="header-nav">
            <ul>
                <li name="name" onClick={() => clickHandleCategory('name')}>name</li>
                <li id="code" onClick={() => clickHandleCategory('code')}> code</li>
                <li id="currencies" onClick={() => clickHandleCategory('currencies')}>currencies</li>
                <li id="population" onClick={() => clickHandleCategory('dialCode')}>dial code</li>
                <li id="tld" onClick={() => clickHandleCategory('tld')}>tld</li>
            </ul>
        </div >
    )
}

export default HeaderNav