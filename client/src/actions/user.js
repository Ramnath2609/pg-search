import axios from 'axios'

export const setUser = (user) => {
    return {
        type : 'SET_USER',
        payload : user
    }
}


export const startGetUser = () => {
    return dispatch => {
        axios.get('http://localhost:4709/account', formData, {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            } 
        })
        .then(response => {
            if(response.data._id){
                const user = response.data
                dispatch(setUser(user))
            }
        })
    }
}