import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
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
      </nav>
    </aside>
  )
}

export default Sidebar
