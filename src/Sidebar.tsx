import { useState } from 'react'
import './Sidebar.css'

interface SidebarProps {
  onToggle: (isCollapsed: boolean) => void
}

function Sidebar({ onToggle }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleToggle = () => {
    const newState = !isCollapsed
    setIsCollapsed(newState)
    onToggle(newState)
  }

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <nav>
        {isCollapsed ? (
          <>
            <section className="sidebar-section-icon" title="Education" onClick={handleToggle}>
              <span className="icon">🎓</span>
            </section>
            
            <section className="sidebar-section-icon" title="Current Work" onClick={handleToggle}>
              <span className="icon">💼</span>
            </section>
            
            <section className="sidebar-section-icon" title="Certificates" onClick={handleToggle}>
              <span className="icon">📜</span>
            </section>
          </>
        ) : (
          <>
            <section className="sidebar-section">
              <h2>Education</h2>
              <ul>
                <li>Add your education details here</li>
              </ul>
            </section>
            
            <section className="sidebar-section">
              <h2>Current Work</h2>
              <ul>
                <li>Add your current work details here</li>
              </ul>
            </section>
            
            <section className="sidebar-section">
              <h2>Certificates</h2>
              <ul>
                <li>Add your certificates here</li>
              </ul>
            </section>
          </>
        )}
      </nav>
      
      <button 
        className="sidebar-toggle" 
        onClick={handleToggle}
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {isCollapsed ? '→' : '←'}
      </button>
    </aside>
  )
}

export default Sidebar
