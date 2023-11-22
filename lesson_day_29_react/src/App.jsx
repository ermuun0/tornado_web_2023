import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MessageComponent from './components/MessageComponents';
import List from './components/List';

function App() {
  const shouldShowMessage = true;
  return (
    <div className='App'>
      <h1>Welcome to conditional rendering demo</h1>
      <MessageComponent showMessage={shouldShowMessage} />
      <List/>
    </div>
  )
}

export default App
