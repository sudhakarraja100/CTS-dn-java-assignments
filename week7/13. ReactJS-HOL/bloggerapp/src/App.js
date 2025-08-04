import React, { useState } from 'react';
import CourseDetails from './components/CourseDetails';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import './index.css';

function App() {
  const [showActiveCourses, setShowActiveCourses] = useState(true);
  const [showInStockBooks, setShowInStockBooks] = useState(true);
  const [showPublishedBlogs, setShowPublishedBlogs] = useState(true);

  return (
    <div className="app-container">
      <div>
        <h1>Blogger App Dashboard</h1>
        <div>
          <label>
            <input
              type="checkbox"
              checked={showActiveCourses}
              onChange={() => setShowActiveCourses(!showActiveCourses)}
            />
            Show Active Courses Only
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={showInStockBooks}
              onChange={() => setShowInStockBooks(!showInStockBooks)}
            />
            Show In-Stock Books Only
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={showPublishedBlogs}
              onChange={() => setShowPublishedBlogs(!showPublishedBlogs)}
            />
            Show Published Blogs Only
          </label>
        </div>
      </div>

      <CourseDetails showActiveOnly={showActiveCourses} />
      <BookDetails showInStock={showInStockBooks} />
      <BlogDetails showPublishedOnly={showPublishedBlogs} />
    </div>
  );
}

export default App;