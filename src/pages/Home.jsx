import {Link} from "react-router";
export default function Home() {
    return (
        <div>
            <h1>Welcome to react project</h1>
            <p>This app teaches basics of react</p>
            <Link to="/products" className="btn">Browse Products</Link>
        </div>
    )
}