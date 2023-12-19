
import PostList from '../PostList';
import PostForm from '../PostForm';
import {useEffect, useRef, useState} from 'react';
import PostFilter from '../PostFilter';
import Modal from '../UI/modal/Modal';
import MyButton from '../UI/button/MyButton';
import Pagination from '../UI/pagination/pagination';
import {usePagesArray} from '../../hooks/usePagesArray';
import {getPagesCount} from '../../utils/pages';
import {useFetching} from '../../hooks/useFetching';
import PostService from '../../API/PostService';
import {usePosts} from '../../hooks/usePosts';

function Posts() {
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

  const [totalPages, setTotalPages] = useState(0);
  const [postsLimit, setPostsLimit] = useState(10);
  const [page, setPage] = useState(1);
  let pagesArray = usePagesArray(totalPages);

  /* ---------Functions---------- */


  const sortedSearchResults = usePosts(posts, filter.selectedSort, filter.searchQuery);

  const [fetchPosts, postsLoadingStatus, fetchPostsError] = useFetching(async () => {
    const response = await PostService.fetchAll(postsLimit, page);
    setPosts(response.data);
    const totalPostsCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalPostsCount, postsLimit));
  });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModalVisibility(false);
  };

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const changePage = (pageNumber) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

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
            loadingStatus={postsLoadingStatus}
            error={fetchPostsError}
        />

        <Pagination
            page={page}
            pagesArray={pagesArray}
            changePage={changePage}
        />

      </div>
  );
}

export default Posts;
