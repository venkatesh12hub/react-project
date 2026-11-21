import { NavLink, Outlet} from "react-router";

export default function Layout() {
    return(
        <div>
            <nav className="navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/products">Products</NavLink>

            </nav>
            <main className="content">
                <Outlet/>
            </main>
            <footer className="footer">@all rights are reserved, Develop by team Teks</footer>
        </div>
    )
}