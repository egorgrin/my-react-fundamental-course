import axios from 'axios';

export default class PostService {
  static async fetchAll(limit = 10, page = 1) {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
        {
          params: {
            _limit: 10,
            _page: page,
          },
        });
    return response;
  }
  static async fetchPost(id) {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/' + id);
    return response;
  }
  static async fetchComments(id) {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/' + id + '/comments');
    return response;
  }
}