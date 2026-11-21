import { Link } from "react-router";
import { products } from "../data/products";

export default function Products() {
    return (
        <div>
            <h1>Products</h1>
            <ul>{products.map((p)=>(
                <li key={p.id}>
                    <Link to={`/products/${p.id}`}>{p.name}</Link> - ${p.price}
                </li>
            ))}</ul>
        </div>
    )
}