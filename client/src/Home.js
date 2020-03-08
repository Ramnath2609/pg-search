import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div className = "container" style = {{marginTop : '150px'}}>
            <div className = "row">
                <div className = "col-md-6">
                    <h1>Are you searching for a PG ?<br/><Link to ="/user/register">Click here</Link> </h1>
                </div>
                <div className = "col-md-6">
                    <h1>Do you want to add your PG here ?<br/><Link to ="/user/register">Click here</Link></h1>
                </div>
            </div>
        </div>
    )
    
}

export default Home