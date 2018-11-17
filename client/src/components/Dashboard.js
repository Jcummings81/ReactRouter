import React from 'react'
import { Redirect } from 'react-router-dom'
import { isAuthenticated } from '../fakeAuth'
import axios from 'axios'

class Dashboard extends React.Component {
    state = { products: [] }

    componentDidMount() {
        axios.get('/api/products')
            .then( res => this.setState({ products: res.data }))
    }

    render () {
    if (isAuthenticated()) {
        return <h3>You are logged in!</h3>
    } else {
        return <Redirect to="/login" />
    }
}

}
export default Dashboard