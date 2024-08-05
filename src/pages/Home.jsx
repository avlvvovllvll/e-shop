import { useEffect, useState } from "react";
import { Products } from "../utils/data";
import ProductCard from "../components/ProductCard";
import { GetData } from "../services";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [priseFilter, setPriseFilter] = useState("");
    useEffect(() => {
        GetData("articles/").then((res) => {
            setProducts(res);
        });
        GetData("banner/").then((res) => {
            console.log(res);
        });
    }, []);

    return (
        <div className="home">
            <h1>Our Products</h1>
            <div className="filter">
                <input
                    onChange={(e) => setPriseFilter(e.target.value)}
                    type="text"
                />
            </div>
            <div className="products">
                <>
                    {products.map((item, index) => (
                        <div className="card" key={index}>
                            <ProductCard item={item} />
                        </div>
                    ))}
                </>
            </div>
        </div>
    );
};

export default Home;
