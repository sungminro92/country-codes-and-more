import { useContext } from 'react'
import './style.css'
import { DataContext } from '../../App'
import { MdClear } from 'react-icons/md'

const HeaderNav = ({ clickHandleCategory, handleChangeInput, toggleAboutPage }) => {
    const data = useContext(DataContext)

    return (
        <div className="header-nav">
            <ul className="sub-font bolder-font">
                <li id="code" onClick={() => clickHandleCategory('code2')}>ALPHA-2</li>
                <li id="tld" onClick={() => clickHandleCategory('code3')}>ALPHA-3</li>
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