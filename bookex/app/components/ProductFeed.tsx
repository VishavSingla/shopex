"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image, { StaticImageData } from "next/image";
import productim from "./mm.png";
import Product from "./Product";
function ProductFeed() {
    return (
        <div className="flex flex-wrap gap-10 p-4 cursor-default ">
            <Product
                title={"Hat"}
                description={"lorem ipsium"}
                price={"₹100"}
                image={productim}
                rating={4}
                id={1}
                category={"clothing"}
                buyers={1000}
            />
            <Product
                title={"Hat"}
                description={"lorem ipsium"}
                price={"₹100"}
                image={productim}
                rating={4}
                id={1}
                category={"clothing"}
                buyers={1000}
            />
            <Product
                title={"Hat"}
                description={"lorem ipsium"}
                price={"₹100"}
                image={productim}
                rating={4}
                id={1}
                category={"clothing"}
                buyers={1000}
            />

            <Product
                title={"Hat"}
                description={"lorem ipsium"}
                price={"₹100"}
                image={productim}
                rating={4}
                id={1}
                category={"clothing"}
                buyers={1000}
            />

            <Product
                title={"Hat"}
                description={"lorem ipsium"}
                price={"₹100"}
                image={productim}
                rating={4}
                id={1}
                category={"clothing"}
                buyers={1000}
            />

            <Product
                title={"Hat"}
                description={"lorem ipsium"}
                price={"₹100"}
                image={productim}
                rating={4}
                id={1}
                category={"clothing"}
                buyers={1000}
            />

            <Product
                title={"Hat"}
                description={"lorem ipsium"}
                price={"₹100"}
                image={productim}
                rating={4}
                id={1}
                category={"clothing"}
                buyers={1000}
            />

            <Product
                title={"Hat"}
                description={"lorem ipsium"}
                price={"₹100"}
                image={productim}
                rating={4}
                id={1}
                category={"clothing"}
                buyers={1000}
            />
        </div>
    );
}

export default ProductFeed;

// const router = useRouter();

//   useEffect(() => {
//     // Get the products from the API
//     fetch('https://api.example.com/products')
//       .then(response => response.json())
//       .then(products => {
//         setProducts(products);
//       });
//   }, []);

//   const [products, setProducts] = useState([]);
