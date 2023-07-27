//自定义组件PostProvider
import React, { createContext, useContext, useState } from "react";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const searchedPosts = ...
  function handleAddPost(post) {...}
  function handleClearPosts() {...}
  
  return (
    <PostContext.Provider
      value={{
        posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export { PostProvider, PostContext };

//自定义钩子usePosts
import PostContext from "./PostContext";

const usePosts = () => {
  const context = useContext(PostContext);
  return context;
};

export default usePosts;

