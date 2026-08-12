import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../features/posts/postsSlice";
function PostList() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>All Posts</h2>
      {posts.length === 0 ? (
        <p>No Posts Available</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {post.title}

              <button
                onClick={() => dispatch(deletePost(post.id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default PostList;