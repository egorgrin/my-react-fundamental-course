import React from 'react';
import MyButton from './UI/button/MyButton';
import {useNavigate} from 'react-router';

const PostItem = (props) => {
  const navigate = useNavigate()

  return (
      <div className="post">
        <div className="post__content">
          <strong>{props.numer}. {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>
            Open
          </MyButton>
          <MyButton onClick={() => props.deletePost(props.post)}>
            Delete
          </MyButton>

        </div>
      </div>
  );
};

export default PostItem;
