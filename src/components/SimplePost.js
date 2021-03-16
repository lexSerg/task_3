import PropTypes from 'prop-types'
const SimplePost = (props) => {
    let {post} = props;
    return (
        <div className='simple-data'>
            <p>Id : {post.id}</p>
            <p>Title : {post.title}</p>
            <p>Body : {post.body}</p>
        </div>
    )
};
export default SimplePost;
SimplePost.propTypes = {
    post : PropTypes.object.isRequired,
}