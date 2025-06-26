import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      {/* Any app-wide UI elements can go here */}
      <Outlet /> {/* This is where your child routes (Signup/Confirmation) will render */}
    </div>
  )
}

export default App