/* eslint-disable jsx-a11y/anchor-is-valid */
export const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <ul className="links">
          <li>
            <a href="home">Inicio</a>
          </li>
          <li>
            <a href="projects">Proyectos</a>
          </li>
          <li>
            <a href="habilidades">Habilidades</a>
          </li>
          <li>
            <a href="contact">Contacto</a>
          </li>
        </ul>
        <div className="toggle_btn">
        <i className="fa-solid fa-bars"></i>
        </div>
        <a href="#" className="action_btn">Descargar CV</a>
      </div>
    </header>
  )
}