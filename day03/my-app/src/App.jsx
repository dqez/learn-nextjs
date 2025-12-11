import React from 'react'
import ProfileCard from './components/ProfileCard'
import Button from './components/Button'
import './App.css'

function App() {

  return (
    <>
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
