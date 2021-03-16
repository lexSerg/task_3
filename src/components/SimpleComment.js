import PropTypes from 'prop-types'
const SimpleComment = (props) => {
    let {comment} = props;
    console.log(comment);
    return (
        <div className='simple-data'>
            <p>Id : {comment.id}</p>
            <p>Name : {comment.name}</p>
            <p>Email : {comment.email}</p>
            <p>Body : {comment.body}</p>
        </div>
    )
};
export default SimpleComment;
SimpleComment.propTypes = {
    comment : PropTypes.object.isRequired,
}