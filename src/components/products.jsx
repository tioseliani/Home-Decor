import React, { Component } from 'react';
import { getProducts } from '../services/productServices';
import Cart  from "../services/Cart";
import { Link } from "@reach/router";

const ShoppingCart = new Cart("Cart_KEY");
ShoppingCart.read();
class Products extends Component {
    state = { 
        products: getProducts()
    };
    
    addToCart = (product) => {
        ShoppingCart.add(product);
    }

    render() { 
        return (
            <React.Fragment>
                <p className="product-title">Home Décor</p>
                <section>
                    <div className="products container">
                        {this.state.products.map(product => (
                            <div className="about-product" key={product._id}>
                                <div  className="product-img" style={{ backgroundImage: `url('${product.picture}')`}}>
                                    <div className="add-in-cart">
                                        <i onClick={() => this.addToCart(product)} className="fas fa-heart"></i>
                                    </div>
                                </div>
                                <Link to={"/Product/"+product._id} className="product-details">{product.title}</Link>
                                <span>{product.price}</span>  
                            </div>
                        ))}   
                    </div>
                </section>
                <div className="page-numbers">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Products;
