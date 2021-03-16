import DataService from '../services/DataService'
import React, { useState, useEffect } from 'react'
const FullUser = (props) => {
    const [user, setUser] = useState(null);
    const id = props.match.params.id;
    const dataService = new DataService();
    async function getSimpleUser(num){
        const response = await dataService.getUserById(num);
        setUser(response)  
    }    
    // useEffect(() => {
    //     getSimpleUser(id)
    // })
    // getSimpleUser(id)
    return(  
        <div className='full-user'>
            {user && <p>Full User {user.name}</p>}
            <button onClick={() => getSimpleUser(id)}>User</button>
            {!user && <p>Loading...</p>}
            {console.log(user)}
            
        </div>
    )
}
export default FullUser;