import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


// State management and update for adding a new blog
const Add = () => {
  const [blog, setBlog] = useState({
    title: "",
    description: ""
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBlog((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Post Request upon the addition of the data
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/blogs", blog);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (

    // UI
    <div className="form">
      <h1>Add New Blog</h1>
      <input
        type="text"
        placeholder="Blog title"
        name="title"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Blog description"
        name="description"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link to="/" className="linkHome">SEE ALL BLOGS</Link>
    </div>
  );
};

export default Add;
