import React from 'react';
import PostItem from './PostItem';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Loader from './UI/loader/Loader';

const PostList = ({posts, title, deletePost, loadingStatus, error}) => {

  return (
      <div>
        <h1 style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
          {error
              ? error
              : loadingStatus.fetchAttempted
                  ? posts.length
                      ? title
                      : loadingStatus.loading
                          ? <Loader/>
                          : 'No posts found!'
                  : <Loader/>
          }

        </h1>

        <TransitionGroup>
          {posts.map((post) =>
              <CSSTransition
                  key={post.id}
                  timeout={500}
                  classNames="post"
              >
                <PostItem
                    deletePost={deletePost}
                    numer={post.id}
                    post={post}
                />
              </CSSTransition>,
          )}
        </TransitionGroup>
      </div>
  );
};

export default PostList;
