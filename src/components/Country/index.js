import './style.css'

const Country = ({ name, code }) => {
    return (
        <div className="country-container">
            <p>{code}</p>
        </div>
    )
}

export default Country