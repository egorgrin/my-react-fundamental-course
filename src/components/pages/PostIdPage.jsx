import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import {useFetching} from '../../hooks/useFetching';
import PostService from '../../API/PostService';
import Loader from '../UI/loader/Loader';

const PostIdPage = () => {

  const params = useParams();

  let {id} = params;


  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPost, postLoadingStatus, postError] = useFetching(async (id) => {
    const response = await PostService.fetchPost(id);
    setPost(response.data);
  });

  const [fetchComments, commentsLoadingStatus, commentsError] = useFetching(async (id) => {
    const response = await PostService.fetchComments(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPost(id);
    fetchComments(id);
  }, []);

  return (
      <div
          style={{maxWidth: '600px', margin: '0 auto'}}
      >
        <h1 style={{margin: '50px 0'}}>
          {`Post ${id} page`}
        </h1>


        <div
            style={{fontSize: '18px'}}
        >
          {postLoadingStatus.loading ? <Loader/> : post.body}
        </div>

        <h2>Comments:</h2>
        {commentsLoadingStatus.loading
            ? <Loader/>
            : comments.map((c, i) => {
              return (
                  <div
                  key={i}
                  >
                    <h2>{c.name}</h2>
                    <p>{c.body}</p>
                  </div>
              );
            })
        }


      </div>
  );
};

export default PostIdPage;