import axios from 'axios';

export default class PostService {
  static async fetchAll() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  }
}