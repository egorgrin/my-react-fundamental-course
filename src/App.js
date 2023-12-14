import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import {useEffect, useMemo, useRef, useState} from 'react';
import PostFilter from './components/PostFilter';
import Modal from './components/UI/modal/Modal';
import MyButton from './components/UI/button/MyButton';
import {usePosts} from './hooks/usePosts';
import PostService from './API/PostService';

function App() {
  // Renders counter
  const render = useRef(0);

  useEffect(() => {
    render.current += 1;
    // console.log(`${render.current} render`);
  });

  /* ---------State---------- */

  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState(
      {
        selectedSort: '',
        searchQuery: '',
      },
  );

  const [modalVisibility, setModalVisibility] = useState(false);

  const sortedSearchResults = usePosts(posts, filter.selectedSort, filter.searchQuery);

  const [postsLoadingStatus, setPostsLoadingStatus] = useState({
    fetchAttempted: false,
    loading: false,
  });


  /* ---------Functions---------- */

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModalVisibility(false);
  };

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  function fetchPosts() {
    setPostsLoadingStatus({...postsLoadingStatus, loading: true});

    setTimeout(async () => {
      setPosts(await PostService.fetchAll());
      setPostsLoadingStatus({fetchAttempted: true, loading: false});
    }, 1000);

  }

  useEffect(() => {
    fetchPosts();
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
            postsLoadingStatus={postsLoadingStatus}
        />

      </div>
  );
}

export default App;
