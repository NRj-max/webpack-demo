import { createContext } from "react";
const PostContext = createContext();

function App() {
  //需要传递给子组件的数据，包括state和function
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  function handleAddPost(post) {
    return null;
  }
  function handleClearPosts() {
    return null;
  }

  return (
    //PostContext.Provider组件包裹子组件，并在value中以对象的方式定义要传递的数据
    <PostContext.Provider
      value={{
        posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        searchQuery,
        setSearchQuery,
      }}
    >
      <section>...</section>
    </PostContext.Provider>
  );
}

function Results() {
    const { posts } = useContext(PostContext);
  
    return <p>{posts.length} atomic posts found</p>;
  }
  