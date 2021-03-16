import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
const SimpleUser = (props) => {
    let {user} = props;
    const  showFullInfo = (id) => {
        props.history.push(`/users/${id}`);
    }
    return (
        <div className='simple-data'>
            <p>Id : {user.id}</p>
            <p>Name : {user.name}</p>
            <p>Username : {user.username}</p>
            <button className='user-info-btn' onClick={() => showFullInfo(user.id)}>Show full info</button>
        </div>
    )
};
SimpleUser.propTypes = {
    user: PropTypes.object.isRequired,
}
export default  withRouter(SimpleUser);