import React from "react";
import List from "../components/Product/List";
import ProductState from "../context/Products/ProductState";

const ProductList=()=>{
    return(
        <div>
            <ProductState>
            <List />
            </ProductState>
        </div>
    )
}

export default ProductList;