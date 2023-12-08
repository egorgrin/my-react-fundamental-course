import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import {useState} from 'react';
import MySelect from './components/UI/select/MySelect';

function App() {

  const [posts, setPosts] = useState([{id: 1, title: 'JS 1', body: 'Decr'}]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
      <div className={'App'}>

        <PostForm createPost={createPost}/>

        <hr style={{margin: '20px 0'}}/>

        <MySelect
            defaultVal={'Sort By'}
            options={[
              {value: 'title', name: 'By name'},
              {value: 'body', name: 'By desc'},
            ]}
        />

        {posts.length !== 0
            ? <PostList deletePost={deletePost} posts={posts} title={'Js posts'}/>
            : <h1 style={{
              textAlign: 'center',
              marginTop: '50px',
              marginBottom: '50px',
            }}>
              No posts yet!
            </h1>

        }


      </div>
  );
}

export default App;
