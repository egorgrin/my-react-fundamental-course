import React from 'react';
import PostItem from './PostItem';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Loader from './UI/loader/Loader';

const PostList = ({posts, title, deletePost, postsLoadingStatus}) => {

  return (
      <div>
        <h1 style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
          {postsLoadingStatus.fetchAttempted
              ? posts.length
                  ? title
                  : postsLoadingStatus.loading
                      ? <Loader/>
                      : 'No posts found!'
              : <Loader/>
          }

        </h1>

        <TransitionGroup>
          {posts.map((post, index) =>
              <CSSTransition
                  key={post.id}
                  timeout={300}
                  classNames="post"
              >
                <PostItem
                    deletePost={deletePost}
                    numer={index + 1}
                    post={post}
                />
              </CSSTransition>,
          )}
        </TransitionGroup>
      </div>
  );
};

export default PostList;
