import React from 'react'
import RegisterForm from './RegisterForm'

function UserRegister(){

    const handleSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <RegisterForm handleSubmit = { handleSubmit } />
        </div>
    )
}

export default UserRegister