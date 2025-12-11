import React, { useState } from 'react'
import ProfileCard from './components/ProfileCard'
import Button from './components/Button'
import './App.css'

function App() {
  const [showCards, setShowCards] = useState(true);

  const handleToggle = () => {
    setShowCards(!showCards);
  }

  return (
    <div className='container'>
      <h1>Dashbroad Quản lý Profile</h1>

      <button
        onClick={handleToggle}
        style={{ padding: '10px', margin: '15px 0', backgroundColor: showCards ? 'red' : 'green', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        {showCards ? 'Ẩn hết Cards' : 'Hiện Lại Cards'}
      </button>

      <div
        style={{ display: 'flex' }}
      >
        {showCards ? (
          <>
            <ProfileCard
              name="Tran Dinh Quy"
              title="Hello"
            />
            <ProfileCard
              name="Dinh Quy"
              title="World"
            />
            <ProfileCard
              name="Quy"
              title="Hello, World"
            />
          </>
        ) : (
          <h2>Cards đang bị ẩn.</h2>
        )}

      </div>
    </div>
  )
}

export default App
