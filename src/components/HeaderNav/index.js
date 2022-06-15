import { useState, useEffect, useContext } from 'react'
import './style.css'
// import { NavLink } from 'react-router-dom'
import { DataContext } from '../../App'

const HeaderNav = ({ clickHandleCategory, handleChangeInput }) => {
    const data = useContext(DataContext)

    // const [selected, setSelected] = useState('')
    // const [input, setInput] = useState('')

    // const handleInput = (e) => {
    //     setInput(e.target.value)
    //     handleChangeInput(e.target.value)
    // }
    // const clickSelect = (e) => {
    //     setSelected(e.target.id)
    // }



    return (
        <div className="header-nav">
            <ul>
                {/* <li name="name" onClick={() => clickHandleCategory('name')}>name</li> */}
                <li id="code" onClick={() => clickHandleCategory('code')}> code</li>
                {/* <li id="currencies" onClick={() => clickHandleCategory('currencies')}>currencies</li>
                <li id="population" onClick={() => clickHandleCategory('dialCode')}>dial code</li> */}
                <li id="tld" onClick={() => clickHandleCategory('tld')}>tld</li>
            </ul>
            <input className="search-input" value={data.inputVal} onChange={(e) => handleChangeInput(e.target.value)}></input>
        </div >
    )
}

export default HeaderNav