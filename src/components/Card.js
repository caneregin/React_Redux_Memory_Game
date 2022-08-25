import "../App.css"

export default function Card({card, flipped, handleChoice}){
    const handleClick=()=>{
        handleChoice(card)
    }
    return(
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
            <img className='front' id={card.id} src={card.src} alt="card front" />
              <img id={card.id} src="16.png" onClick={handleClick} alt="card back"/>
            </div>
        </div>
    )
}