import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import {useEffect, useMemo, useRef, useState} from 'react';
import PostFilter from './components/PostFilter';
import Modal from './components/UI/modal/Modal';
import MyButton from './components/UI/button/MyButton';
import {usePosts} from './hooks/usePosts';

function App() {
  // Renders counter
  const render = useRef(0);

  useEffect(() => {
    render.current += 1;
    // console.log(`${render.current} render`);
  });

  const [posts, setPosts] = useState([
    {id: 1, title: 'AAA', body: 'CCC'},
    {id: 2, title: 'BBB', body: 'BBB'},
    {id: 3, title: 'CCC', body: 'AAA'},
  ]);

  const [filter, setFilter] = useState(
      {
        selectedSort: '',
        searchQuery: '',
      },
  );

  const [modalVisibility, setModalVisibility] = useState(false);

  const sortedSearchResults = usePosts(posts, filter.selectedSort, filter.searchQuery);


  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModalVisibility(false);
  };

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

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
            title={'Js posts'}
        />

      </div>
  );
}

export default App;
