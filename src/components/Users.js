import React from 'react'
import DataService from '../services/DataService'
import Loader from './Loader/Loader';
import SimpleUser from './SimpleUser';
export default class Users extends React.Component {
    dataService = new DataService()
    state = {users : []}
    async componentDidMount() {
        const users = await this.dataService.getUsers();
        this.setState({users});
    }
    render() {
        return (
            <div>
                {!this.state.users.length && <Loader/>}
                {
                    !!this.state.users.length && (
                        <div>
                            {this.state.users.map(user => (
                                <SimpleUser user={user} key={user.id}></SimpleUser>
                            ))}
                        </div>
                    )
                }
            </div>
        ) 
    }
};
