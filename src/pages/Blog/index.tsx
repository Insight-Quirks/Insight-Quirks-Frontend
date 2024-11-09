import MainContent from "../../components/Blog/MainContent";
import Sidebar from "../../components/Blog/Sidebar";
import { blogData } from "../../components/Blog/utils";

import "./blog.css";

const Blog = () => (
  <div className="blog-container">
    <Sidebar sections={blogData.data} />
    <MainContent blogData={blogData} />
  </div>
);

export default Blog;
