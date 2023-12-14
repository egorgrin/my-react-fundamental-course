import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import {useEffect, useMemo, useRef, useState} from 'react';
import PostFilter from './components/PostFilter';
import Modal from './components/UI/modal/Modal';
import MyButton from './components/UI/button/MyButton';
import {usePosts} from './hooks/usePosts';
import axios from 'axios';
import PostService from './API/PostService';

function App() {
  // Renders counter
  const render = useRef(0);

  useEffect(() => {
    render.current += 1;
    // console.log(`${render.current} render`);
  });

  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState(
      {
        selectedSort: '',
        searchQuery: '',
      },
  );

  const [modalVisibility, setModalVisibility] = useState(false);

  const sortedSearchResults = usePosts(posts, filter.selectedSort, filter.searchQuery);

  const [postsLoadingStatus, setPostsLoadingStatus] = useState(false);


  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModalVisibility(false);
  };

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  async function fetchPosts() {
    setPostsLoadingStatus(true);
    const posts = await PostService.fetchAll();
    setPosts(posts);
    setPostsLoadingStatus(false);
  }

  useEffect(() => {
    fetchPosts().catch((error) => {
      console.error(error);
    });
  }, []);

  return (
      <div
          className={'App'}
          style={{padding: '30px 0'}}
      >
        <MyButton onClick={() => setModalVisibility(true)}>
          Create post
        </MyButton>
        <Modal
            visibility={modalVisibility}
            setVisibility={setModalVisibility}
        >
          <PostForm createPost={createPost}/>
        </Modal>

        <hr style={{margin: '20px 0'}}/>

        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />

        <PostList
            deletePost={deletePost}
            posts={sortedSearchResults}
            title={'Posts'}
            loading={postsLoadingStatus}
        />

      </div>
  );
}

export default App;
