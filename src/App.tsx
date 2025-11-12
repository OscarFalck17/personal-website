import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  return (
    <div className="app-container">
      <Sidebar onToggle={setIsSidebarCollapsed} />
      <main className={`app ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <h1>Welcome to my personal website</h1>
      </main>
    </div>
  )
}

export default App
