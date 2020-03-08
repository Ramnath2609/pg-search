import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Home from './Home'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import UserRegister from './components/user/UserRegister';
import OwnerRegister from './components/user/OwnerRegister';
import Login from './components/user/Login';


class NavbarPageStart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isOpen : false
        }
    }

    handleToggle = () => {
        this.setState(prevState => {
            return {
                isOpen : !prevState.isOpen
            }
        })
    }

    handleUserClick = () => {
        this.props.history.push('/user/register')
    }

    handleOwnerClick = () => {
        this.props.history.push('/owner/register')
    }

    render(){
        return (
            <div>
                <BrowserRouter>
                    <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">PG-MATE</NavbarBrand>
                    <NavbarToggler onClick={this.handleToggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                        <NavLink href="/login">Login</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/register">Register</NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
                

                <Route exact path = "/" component = { Home } />
                <Route path = "/user/register" component = { UserRegister} />
                <Route path = "/owner/register" component = { OwnerRegister } />
                <Route path = "/login" component = { Login } />
                </BrowserRouter>

                
            </div>
            
          )
    }
} 
  


export default connect()(NavbarPageStart)