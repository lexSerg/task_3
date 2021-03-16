export default class DataService {
    users_url = 'https://jsonplaceholder.typicode.com/users';
    posts_url = 'https://jsonplaceholder.typicode.com/posts';
    comments_url = 'https://jsonplaceholder.typicode.com/comments';
    getUsers() {
       return fetch(this.users_url).then(value => value.json())
    };
    getUserById(id) {
       return fetch(`${this.users_url}/${id}`).then(value => value.json())
    };
    getPosts() {
       return fetch(this.posts_url).then(value => value.json())
    };
    getComments() {
       return fetch(this.comments_url).then(value => value.json())
    }
}