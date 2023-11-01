const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                {/* Dynamic value in JSX for styling, which is an object. Outside braces identify dynamic value, inside identify it as an object. */}
                {/* Key value pairs are always the css property and then the value. The value is always a string. */}
                {/* In JSX key value pair properties are camel case. No - signs */}
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Blog</a>
            </div>
        </nav>
      );
}
 
export default Navbar;
