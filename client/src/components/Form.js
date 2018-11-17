import React from 'react'

class Form extends React.Component {
    defaultValues = { name: '', price: '', description: '', department: '' }
    state = {...this.defaultValues}

    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleChange = (e) => {
        const {target: {name, value }} = e
        this.setState({ [name]: value })
    }
    render() {
        const { name, price, description, department } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
            <input
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
            required
            />
             <input
            name="price"
            placeholder="Price"
            type="number"
            min="0"
            step=".1"
            value={price}
            onChange={this.handleChange}
            />
             <input
            name="description"
            placeholder="Description"
            value={description}
            onChange={this.handleChange}
            />
             <input
            name="department"
            placeholder="Department"
            value={department}
            onChange={this.handleChange}
            />
            <button>Submit</button>
            </form>
        )
    }
}

export default Form