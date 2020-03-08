import React from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { connect } from 'react-redux'

class Login extends React.Component{
    constructor (){
        super()
        this.state = {
            email : '',
            password : ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email : this.state.email,
            password : this.state.password
        }
    }

    render () {
        return (
            <div className = 'container' style = {{marginTop : '150px'}}>
                <div className = "row">
                    <div className = "offset-md-3 col-md-4">
                    <h1>Login form</h1>
                        <Form onSubmit = { this.handleSubmit }>
                            <FormGroup>
                                <Label for ="email">email</Label>
                                <Input type = "text" id = "email" name ="email" onChange = { this.handleChange } value = { this.state.email } />
                            </FormGroup>
                            <FormGroup>
                                <Label for ="password">email</Label>
                                <Input type = "text" id = "password" name ="password" onChange = { this.handleChange } value = { this.state.password } />
                            </FormGroup>
                            <Button color = "primary">Login</Button>
                        </Form>
                    </div>
                </div>
               
            </div>
        )
    }
   
}

export default connect()(Login)