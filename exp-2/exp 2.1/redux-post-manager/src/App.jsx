import AddPost from "./components/AddPost";
import PlatformSelector from "./components/PlatformSelector";
import PostList from "./components/PostList";
function App() {
  return (
    <div>
      <h1>Redux Post Manager</h1>
      <PlatformSelector />
      <hr />
      <AddPost />
      <hr />
      <PostList />
    </div>
  );
}
export default App;