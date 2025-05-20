export default function Sidebar() {
  return (  
    <div className="sidebar">
      <div className="sidebar__header">
        <h1 className="sidebar__title">Projects</h1>
      </div>
      <nav className="sidebar__nav">
        <ul className="project-list">
          <li className="project-list__item project-list__item--active">
            <a href="#" className="project-list__link">
              Marketing Website
            </a>
          </li>
          <li className="project-list__item">
            <a href="#" className="project-list__link">
              Mobile App
            </a>
          </li>
          <li className="project-list__item">
            <a href="#" className="project-list__link">
              E-commerce Platform
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
