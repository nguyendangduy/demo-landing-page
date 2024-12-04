import { useState } from 'react'
import './scss/main.scss'
import RegisterForm from './components/RegisterForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header></header>
      <main>
        <div className='container'>
          <RegisterForm></RegisterForm>
        </div>
      </main>
      <footer></footer>
    </>
    
  )
}

export default App
