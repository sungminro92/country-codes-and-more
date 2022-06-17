import { useState, useEffect, useContext } from 'react'
import './style.css'
// import { NavLink } from 'react-router-dom'
import { DataContext } from '../../App'
import { MdClear } from 'react-icons/md'

const HeaderNav = ({ clickHandleCategory, handleChangeInput, toggleAboutPage }) => {
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
            <ul className="sub-font bolder-font">
                {/* <li name="name" onClick={() => clickHandleCategory('name')}>name</li> */}
                <li id="code" onClick={() => clickHandleCategory('code2')}>ALPHA-2</li>
                {/* <li id="currencies" onClick={() => clickHandleCategory('currencies')}>currencies</li>
                <li id="population" onClick={() => clickHandleCategory('dialCode')}>dial code</li> */}
                <li id="tld" onClick={() => clickHandleCategory('code3')}>ALPHA-3</li>
                {/* <li id="tld" onClick={() => clickHandleCategory('dialcode')}>NUMERIC</li> */}
                <li id="about" onClick={() => toggleAboutPage()}>ABOUT</li>
            </ul>
            <div className="search-input">
                <input placeholder="search for country name or code" value={data.inputVal} onChange={(e) => handleChangeInput(e.target.value)} />
                <MdClear size={20} style={{ margin: '0px 5px 0px 0px' }} color='black' className="pointer" onClick={(e) => handleChangeInput("")} />
            </div>
        </div >
    )
}

export default HeaderNav