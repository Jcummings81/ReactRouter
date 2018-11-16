import React from 'react'
import { NavLink } from 'react-router-dom'

const styles = {
    active: {
        textDecoration: 'none',
        fontWeight: 'bold',
        color: 'black',
    }
}

const NavBar = () => (
<nav>
    <NavLink activeStyle={styles.active} exact to="/">Home</NavLink>
    {' | '}
    <NavLink activeStyle={styles.active} to="/about">About</NavLink>
    {' | '}
</nav>
)

export default NavBar