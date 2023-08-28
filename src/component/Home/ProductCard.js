import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
// import ReactStars from "react-rating-stars-component";


const ProductCard = ({ product }) => {
  const options = {
    size: "normal",
    value: product.ratings,
    readOnly: true,
    precision :0.5
  };
  

  
  return (
    <Link className="productCard" to = {`/product/${product._id}`}>

      {product.images && product.images.length > 0  && (
        <img src={product.images[0].url} alt={product.name} />
      )}
     
      <p>{product.name}</p>
      
      <div>
        <Rating {...options} />
        <span> ({product.numOfReviews} Reviews) </span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;