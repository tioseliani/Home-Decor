import React, { Component } from 'react';
import { getProducts } from '../services/productServices';

class Product extends Component {
    state = { 
        products: getProducts()
    };
    
    addToCart = (product) => {
        console.log(product);
        
    }
    
    render() { 
        const product =  this.state.products.filter(product => product._id === this.props.id)[0]
        console.log(product)
        return ( 
            <React.Fragment>
                
                { 
                    <section className="p-detail">
                        <img 
                            className="d-product-img"
                            src={product.picture} 
                            alt={product.title} 
                        />
                        <div className="d-about-product">
                            <h2 className="d-title">{product.title}</h2>
                            <p className="p-price">{product.price}</p>
                            <p className="p-color"><span>COLOR:</span> {product.color}</p>
                            <form>
                                <div className="p-quantity">
                                    <span>Qty:</span><input type="number" name="quantity" min="1" max={product.numberInStock}/>
                                </div>
                                <button className="btn quantity-btn">Add in Cart</button>
                            </form>
                            
                        </div>
                                
                    </section>
                    
                }
            </React.Fragment>

            
        );
    }
}
 
export default Product;