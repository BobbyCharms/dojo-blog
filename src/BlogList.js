const BlogList = ({blogs, title, handleDelete}) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {/* The map method cycles through each item in an array and allows you to do something, such as return a template for each.  */}
            {/* Could make the below template for blogs into it's own reusable component to reduce repeating code */}
            {blogs.map((blog) => (
                // the key attribute is used by react to keep track of each item in the array; it should be unique
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                </div>
        ))}
        </div>
    );
}
 
export default BlogList;