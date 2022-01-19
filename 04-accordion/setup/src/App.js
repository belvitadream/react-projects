import React, { useState } from 'react'
import data from './data'
import Question from './Question'

function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <div className='container'>
      <div>
        <h3>Questions And Answers About Login</h3>
      </div>
      <section className='info'>
        {questions.map((question) => {
          return <Question key={question.id} {...question} />
        })}
      </section>
    </div>
  )
}

export default App
