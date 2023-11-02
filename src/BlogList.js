const BlogList = (props) => {
    const blogs = props.blogs;
    
    console.log(props, blogs);

    return (
        <div className="blog-list">
            {/* The map method cycles through each item in an array and allows you to do something, such as return a template for each.  */}
            {/* Could make the below template for blogs into it's own reusable component to reduce repeating code */}
            {blogs.map((blog) => (
                // the key attribute is used by react to keep track of each item in the array; it should be unique
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
        ))}
        </div>
    );
}
 
export default BlogList;