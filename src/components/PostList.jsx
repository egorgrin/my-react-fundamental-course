import React from 'react';
import PostItem from './PostItem';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const PostList = ({posts, title, deletePost, loading}) => {
  return (
      <div>
        <h1 style={{textAlign: 'center'}}>
          {posts.length
              ? title
              : loading
                  ? 'Loading...'
                  : 'No posts found!'
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
