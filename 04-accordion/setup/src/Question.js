import React, { useState } from 'react'
import data from './data'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ id, title, info }) => {
  const [seeAnswer, setSeeAnswer] = useState(false)
  return (
    <>
      <article className='question'>
        <header>
          <h4> {title}</h4>
          <button className='btn' onClick={() => setSeeAnswer(!seeAnswer)}>
            {seeAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        <p>{seeAnswer && info}</p>
      </article>
    </>
  )
}

export default Question
