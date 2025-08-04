import React from 'react';

const blogs = [
{ id: 1, title: 'React Learning', author: 'Stephen Biz', content: 'Welcome to learning React!', isPublished: true },
{ id: 2, title: 'Installation', author: 'Schewzdenier', content: 'You can install React from npm.', isPublished: true },
{ id: 3, title: 'Advanced Hooks', author: 'Jane Doe', content: 'Exploring custom hooks in React.', isPublished: false },
];

function BlogItem({ blog }) {
return (
    <div>
        <div className="item-title">{blog.title}</div>
        <div className="item-author">{blog.author}</div>
        <div className="item-description">{blog.content}</div>
    </div>
);
}

function BlogDetails({ showPublishedOnly }) {
    let contentToRender;
    if (showPublishedOnly) {
    const publishedBlogs = blogs.filter(blog => blog.isPublished);
    if (publishedBlogs.length > 0) {
        contentToRender = (
        <div>
            {publishedBlogs.map(blog => (
            <BlogItem key={blog.id} blog={blog} />
            ))}
        </div>
        );
    } else {
    contentToRender = <p>No published blogs to display.</p>;
    }
} else {
    if (blogs.length > 0) {
        contentToRender = (
        <div>
            {blogs.map(blog => (
            <BlogItem key={blog.id} blog={blog} />
            ))}
        </div>
    );
    } else {
        contentToRender = <p>No blogs to display.</p>;
    }
}

return (
    <div className="component-section">
        <h2>Blog Details</h2>
        {contentToRender}
    </div>
);
}

export default BlogDetails;