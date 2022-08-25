import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import "../App.css"
import { useDispatch } from "react-redux"
import { check, checkFalse, decreasePoint,shuffleData ,finishGame} from "../redux/memoryGame/memoryGameSlice"
import Card from './Card'

function Body() {
  const data = useSelector((state) => state.memoryGame.items)
  const score = useSelector((state) => state.memoryGame.totalPoint)
  const finish = useSelector((state) => state.memoryGame.isFinish)
  const dispatch = useDispatch()
  const [firstClick, setFirstClick] = useState(null)
  const [secondClick, setSecondClick] = useState(null)
  const [trigger,setTrigger] = useState(0)
  
  useEffect(() => {
    if (firstClick && secondClick) {
      if (firstClick.src === secondClick.src) {
        dispatch(check({ id: firstClick.id, matched: true }))
        dispatch(check({ id: secondClick.id, matched: true }))
        console.log("matched")
        setTimeout(() => resetFunc(), 500)
      } else {
        dispatch(checkFalse({ id: firstClick.id, matched: false }))
        dispatch(checkFalse({ id: secondClick.id, matched: false }))
        console.log("not matched")
        dispatch(decreasePoint())
        setTimeout(() => resetFunc(), 500)
      }
    }
  }, [firstClick, secondClick])

  const handleChoice = (card) => {
    firstClick ? setSecondClick(card) : setFirstClick(card)
  }
  const resetFunc = () => {
    setFirstClick(null)
    setSecondClick(null)
  }
  const shuffleCards =()=>{
    const shuffledCards = [...data]
    .sort(()=> Math.random() - 0.5)
    .map((data)=> ({...data, matched: false}))
    dispatch(shuffleData(shuffledCards))
  }
  useEffect(() => {
    shuffleCards()
    dispatch(finishGame())
  }, [trigger])

  return (
    <div>
      Skor: {score}
      {finish === 30 ? <button onClick={()=>setTrigger(trigger+1)}>Yeniden Oyna</button> : ""}
      <div className='card-grid'>
        {data.map(card => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === firstClick || card === secondClick | card.matched}
          />
        ))}

      </div>
    </div>
  )
}

export default Body