const React = require('react');

module.exports = function Navbar ({ user }) {
    return (
        <header>
            <nav>
                {user ?
                    (
                    <div className="navigation">
                        <a href="/" className="nav_item">main page</a>
                        <a href="/auth/logout" className="nav_item">logout</a>
                    </div>
                    ) : (
                    <div className="navigation">
                        <a href="/" className="nav_item">main page</a>
                        <a href="/auth/login" className="nav_item">login</a>
                        <a href="/auth/registration" className="nav_item">registration</a>
                    </div>
                    )
                }
            </nav>
        </header>
    )
}