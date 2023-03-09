import "./NavBar.css";

function NavBar() {
    return (
        <nav>
            <div>
            <ul id="navbar">
                <li><a className = "active" href="index.html">Home</a></li>
                <li><a href="index.html">Latest</a></li>
                <li><a href="index.html">Action</a></li>
                <li><a href="index.html">Romance</a></li>
                <li><a href="index.html">Comedy</a></li>
            </ul>
        </div>

        </nav>
        
    );
}

export default NavBar;