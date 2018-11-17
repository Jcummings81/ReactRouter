import React from 'react'
import { NavLink } from 'react-router-dom'
import { isAuthenticated } from '../fakeAuth'

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
    { isAuthenticated() ? <NavLink activeStyle={styles.active} to="/dashboard">Dashboard</NavLink> : <NavLink activeStyle={styles.active} to="/login">login</NavLink>
    }
</nav>
)

export default NavBar