import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title, deletePost}) => {

  return (
      <div>
        <h1 style={{textAlign: 'center'}}>{title}</h1>
        {posts.map((post, index) =>
            <PostItem deletePost={deletePost} numer={index + 1} post={post} key={index + 1}/>,
        )}
      </div>
  );
};

export default PostList;
