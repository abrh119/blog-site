import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:8800/blogs");
        setBlogs(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBlogs();
  }, []);

  // Delete Request
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/blogs/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // UI
    // Mapping out every blog in blogs from the response to an element
    <div>
      <h1>My Blog Page</h1>
      <div className="blogs"> 
        {blogs.map((blog) => (
          <div key={blog.id} className="blog">
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <button className="delete" onClick={() => handleDelete(blog.id)}>Delete</button>
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="/Add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new Blog
        </Link>
      </button>
    </div>
  );
};

export default Blogs;
