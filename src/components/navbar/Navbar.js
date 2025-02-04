import Link from "next/link";

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarButtonsExample">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white" href="/">Home</Link>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                    <Link href="/users" className="nav-link text-white">Users</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/about" className="nav-link text-white">About</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link href="/contact" className="nav-link text-white">Contact</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link href="/admin" className="nav-link text-white">Admin</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/register" className="nav-link text-white">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/login" className="nav-link text-white">Login</Link>
                                </li>
                                <form className="d-flex input-group w-auto">
                                    <input
                                        type="search"
                                        className="form-control rounded"
                                        placeholder="Search"
                                        aria-label="Search"
                                        aria-describedby="search-addon"
                                    />
                                    <span className="input-group-text border-0" id="search-addon">
                                        <i className="fas fa-search"></i>
                                    </span>
                                </form>
                            </ul>
                        </div>
                    </div>
                </div>

            </nav >
        </div >
    );
}