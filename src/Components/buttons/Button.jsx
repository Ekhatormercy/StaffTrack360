import "./Button.css"
const Button =({text,background})=>{
    return(
        <button className="Trialbtn">{text}{background}</button>
    )
}

export default Button