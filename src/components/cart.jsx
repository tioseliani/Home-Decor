import React, { Component } from 'react';
import ShoppingCart from "../services/Cart";

const MyCart = new ShoppingCart("Cart_KEY");
MyCart.read();


class Cart extends Component {
    state = { 
        products: MyCart.products    
    };
    
    handleDelete = product => {
        const products = this.state.products.filter(p => p._id !== product._id);
        this.setState({ products });
    }
    
    render() { 
         const { length: count } = this.state.products;
        if (count === 0) {
            return <p>Your bag is Empty</p>
        }
        return ( 
            <section className="container">
                <h2 className="cart-title">My Bag</h2>
                <p>{ count } item(s) are in your Bag.</p>
                <section className="cart-products">
                {this.state.products.map(product => (
                    <React.Fragment key={product._id}>
                            <div className="cart-product">
                                <img 
                                    className="c-product-img"
                                    src={product.picture} 
                                    alt={product.title} 
                                />
                                <i onClick={() => this.handleDelete(product)} className="far fa-trash-alt p-delete-icn"></i>
                                <p className="c-title">{product.title}</p>
                                <p className="c-price">{product.price}</p>
                                <p className="c-color"><span>COLOR:</span> {product.color}</p>
                                <div>
                                    <button>-</button>
                                    <span></span>  
                                    <button>+</button>
                                </div>
                                <button className="btn c-edit">Edit</button> 
                            </div>
                        
                    </React.Fragment>
                ))}
                </section>   
                <div className="check-out-form">
                    <button className="btn quantity-btn">Check Out</button>
                </div>
                
            </section> 
        )
    }
}
 
export default Cart;