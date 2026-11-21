import { Link, useNavigate, useParams } from "react-router";
import { products } from "../data/products"

export default function ProductDetail() {

    const {id} = useParams();

    const navigate = useNavigate();
    const Product = products.find((p) => p.id === Number(id));

    if(!Product) {
        return(
            <div>
                <h2>Product not found</h2>
                <Link to="/products">Back to products</Link>
            </div>
        );
    }
    return(
        <div>
            <h1>{Product.name}</h1>
            <p>{Product.description}</p>
            <p><strong>Price: </strong>${Product.price}</p>

            <button onClick={()=> navigate(-1)}>← Go Back</button>
            <button onClick={()=> navigate("/")}>Go Home</button>
        </div>
    )
}