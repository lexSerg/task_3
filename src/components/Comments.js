import React from 'react';
import DataService from '../services/DataService';
import Loader from './Loader/Loader';
import SimpleComment from './SimpleComment';
export default class Comments extends React.Component {
    dataService = new DataService()
    state = {comments : []}
    async componentDidMount() {
        const comments = await this.dataService.getComments();
        this.setState({comments});
    }
    render() {
        return (
            <div>
                {!this.state.comments.length && (<Loader/>)}
                {
                    !!this.state.comments.length && (
                        <div>
                            {this.state.comments.map(comment => (
                                <SimpleComment comment={comment} key={comment.id}></SimpleComment>
                            ))}
                        </div>
                    )
                }
            </div>
        ) 
    }
};
