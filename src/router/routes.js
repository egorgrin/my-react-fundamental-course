import About from '../components/pages/About';
import Posts from '../components/pages/Posts';
import Error from '../components/pages/Error';
import PostIdPage from '../components/pages/PostIdPage';

export const routes = [
  {path: '/about', element: About, exact: true},
  {path: '/posts', element: Posts, exact: true},
  {path: '/posts/:id', element: PostIdPage, exact: true},
  {path: '/error', element: Error, exact: true}
]