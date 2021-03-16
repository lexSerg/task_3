import React from 'react'
import DataService from '../services/DataService';
import Loader from './Loader/Loader';
class FullUserInfo extends React.Component {
    dataService = new DataService();
    id = this.props.match.params.id;
    state = {user : null}
    async componentDidMount() {
        const user = await this.dataService.getUserById(this.id);
        this.setState({user});
    }
    render() {
        return (
            <div className='full-user'>
                {this.state.user && 
                    <div>
                        <p>{this.state.user.id}</p>
                        <p>{this.state.user.name}</p>
                        <p>{this.state.user.username}</p>
                        <p>{this.state.user.phone}</p>
                        <p>{this.state.user.email}</p>
                        <p>{this.state.user.website}</p>
                        {console.log(this.state.user)}
                    </div>
                }
                {!this.state.user && <Loader></Loader>}
            </div>
        ) 
    }
};
export default FullUserInfo