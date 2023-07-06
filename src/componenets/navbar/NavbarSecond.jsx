import React from 'react'
import c from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const NavbarSecond = () => {
  return (
    <div className={c.second__navbar}>
        <Link className={c.nav__second__link}>МАГАЗИН</Link>
        <Link className={c.nav__second__link}>О КОМПАНИИ</Link>
        <Link className={c.nav__second__link}>ПРОДУКЦИЯ</Link>
        <Link className={c.nav__second__link}>УСЛУГИ</Link>
        <Link className={c.nav__second__link}>АКЦИИ И НОВОСТИ</Link>
        <Link className={c.nav__second__link}>ОБРАТНАЯ СВЯЗЬ</Link>
    </div>
  )
}

export default NavbarSecond