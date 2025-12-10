import { useState } from 'react'
import ProfileCard from './components/ProfileCard'
import Button from './components/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <ProfileCard
        name="Tran Dinh Quy"
        title="Dev"
      />

      <ProfileCard
        name="Zeq Tran"
        title="Dev"
      />

      <ProfileCard />

      <Button />

    </>
  )
}

export default App
