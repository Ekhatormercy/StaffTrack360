import "./Reviewcard.css"
const Reviewcard =({text, ptext, image})=>{
    return(
       <div className="revCard">
        <div className="reviewcardwrap">
            <p>{ptext}</p>
     <div className="reviewdown">
        <div className="reviewcirlce">
            <img src={image} alt="" />
        </div>
        <span>{text}</span>
     </div>
        </div>
       </div>
    )
}
export default Reviewcard