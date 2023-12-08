import './styles/App.css';
import MyInput from './components/UI/input/MyInput';
import {useState} from 'react';
import MyButton from './components/UI/button/MyButton';
import PostList from './components/PostList';

function App() {

  const [posts, setPosts] = useState([{id: 1, title: 'JS 1', body: 'Decr'},]);

  const [post, setPost] = useState(
      {
        title: '',
        body: '',
      },
  );

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({title: '', body: ''});
  };

  return (
      <div className={'App'}>
        <form>
          <MyInput
              value={post.title}
              onChange={e => setPost({...post, title: e.target.value})}
              type={'text'}
              placeholder={'Post Name'}
          />
          <MyInput
              value={post.body}
              onChange={e => setPost({...post, body: e.target.value})}
              type={'text'}
              placeholder="Content"
          />

          <MyButton onClick={addNewPost}>Create Post</MyButton>
        </form>

        <PostList posts={posts} title={'Js posts'}/>

      </div>
  );
}

export default App;
