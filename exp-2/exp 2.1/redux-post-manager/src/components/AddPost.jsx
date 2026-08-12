import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/posts/postsSlice";
function AddPost() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleAddPost = () => {
    if (title.trim() === "") return;
    dispatch(
      addPost({
        id: Date.now(),
        title: title,
      })
    );
    setTitle("");
  };
  return (
    <div>
      <h2>Add New Post</h2>
      <input
        type="text"
        placeholder="Enter Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddPost}>
        Add Post
      </button>
    </div>
  );
}
export default AddPost;