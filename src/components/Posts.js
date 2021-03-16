import React from 'react'
import DataService from '../services/DataService';
import Loader from './Loader/Loader';
import SimplePost from './SimplePost'
class Posts extends React.Component {
    dataService = new DataService()
    state = {posts : []}
    async componentDidMount() {
        const posts = await this.dataService.getPosts();
        this.setState({posts});
    }
    render() {
        return (
            <div>
                {!this.state.posts.length && <Loader/>}
                {
                    !!this.state.posts.length && (
                        <div>
                            {this.state.posts.map(post => (
                                <SimplePost post={post} key={post.id}></SimplePost>
                            ))}
                        </div>
                    )
                }
            </div>
        ) 
    }
};
export default Posts