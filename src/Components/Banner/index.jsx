// Style
import './style.css'

export const Banner = ({img, text}) => {
    return (
        <div className="banner-container">
            <img src={img} />
            <h1>{text}</h1>
        </div>
    )
}