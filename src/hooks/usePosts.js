import {useMemo} from 'react';

export const useSortedPosts = (posts, selectedSort) => {
  return useMemo(() => {
    // console.log('sorted');
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [posts, selectedSort]);
};

export const usePosts = (posts, selectedSort, searchQuery) => {
  const sortedPosts = useSortedPosts(posts, selectedSort);

  return useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery));
  }, [searchQuery, sortedPosts]);
};