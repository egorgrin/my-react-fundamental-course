export const getPagesCount = (totalPostsCount, limit) => {
  return Math.ceil(totalPostsCount / limit);
};