import { NavLink } from "react-router-dom"

// Css

import styles from './Navbar.module.css'

// Imagem

import ImgLogo from './imagem/logo - ronnys.png'

const Navbar = () => {
  
  return (
    <nav className={styles.navbar}>
      <NavLink to='/'>
        <img src={ImgLogo} alt="Logo ronnys" />
      </NavLink>
        <ul className={styles.lista_links}>
        <li>
            <NavLink to='/' className={({isActive}) => (isActive ? styles.active : ''  )}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to='/sanduiches' className={({isActive}) => (isActive ? styles.active : ''  )}>Cardápio</NavLink>
          </li>
          <li>
            <NavLink to='/lojas' className={({isActive}) => (isActive ? styles.active : ''  )}>Lojas</NavLink>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar