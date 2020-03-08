import React from 'react'
import { Button, FormGroup, Form, Label, Input } from 'reactstrap'

class RegisterForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username : '',
            email : '',
            mobile : '',
            password : '',
            isOwner : false
        }
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({ [e.target.name ] : e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username : this.state.username,
            email : this.state.email,
            mobile : this.state.mobile,
            password : this.state.password,
            isOwner : this.state.isOwner
        }
        this.props.handleSubmit(formData)
    }

    

    render(){
        return (
            <div className = "container">
                <div className = "row">
                    <div className = "offset-md-3 col-md-6">
                        <h1>Registration form</h1>
                        <Form onSubmit = { this.handleSubmit }>
                            <FormGroup>
                                <Label for="username">username :</Label>
                                <Input type ="text" id = "username" onChange = { this.handleChange } name = "username" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">email :</Label>
                                <Input type ="text" id = "email" onChange = { this.handleChange } name = "email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="mobile">mobile :</Label>
                                <Input type ="text" id = "mobile" onChange = { this.handleChange } name = "mobile" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">password :</Label>
                                <Input type ="password" id = "password" onChange = { this.handleChange } name = "password" />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>do you own a property : <br/>
                                    <Input type ="radio"  onChange = { this.handleChange } name = "isOwner"  value = {true}/> yes 
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check> 
                                    <Input type ="radio"  onChange = { this.handleChange} name = "isOwner" value = {false}/>no 
                                </Label>
                            </FormGroup>
                            

                            <Button color = "primary">Submit</Button>
                    </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterForm