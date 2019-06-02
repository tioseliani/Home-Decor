// import * as genresAPI from './productServices'; //genresAPI???

const products = [
    {
        _id: '11111',
        title: 'Hammered Extra-Long Metal Moon Cycle Banner',
        price: '$34.00',
        color: 'gold',
        numberInStock: 5,
        picture: '/img/product1.jpg'
    },
    {
        _id: '22222',
        title: 'Rattan Eye Wall Mirror',
        price: '59.00$',
        color: 'gold',
        numberInStock: 10,
        picture: '/img/product2.jpg'
    },
    {
        _id: '33333',
        title: 'Cloudnola Botanical Round Wall Clock',
        price: '85.00$',
        color: 'multi',
        numberInStock: 15,
        picture: '/img/product3.jpg'
    },
    {
        _id: '44444',
        title: 'Moon In My Room Light',
        price: '36.00$',
        color: 'gold',
        numberInStock: 5,
        picture: '/img/product4.jpg'
    },
    {
        _id: '55555',
        title: 'Umbra Oversized Hub Mirror',
        price: '160.00$',
        color: 'gold',
        numberInStock: 10,
        picture: '/img/product5.jpg'
    },
    {
        _id: '66666',
        title: 'Traditional Leather Floor Pouf',
        price: '299.00$',
        color: 'pink',
        numberInStock: 15,
        picture: '/img/product6.jpg'
    },
    {
        _id: '77777',
        title: 'Potted Cactus Neon Sign',
        price: '59.00$',
        color: 'green',
        numberInStock: 15,
        picture: '/img/product7.jpg'
    },
    {
        _id: '88888',
        title: 'Lips Mirror',
        price: '49.00$',
        color: 'pink',
        numberInStock: 15,
        picture: '/img/product8.jpg'
    }

];

export function getProducts() {
    return products;
}

export function getProduct(id) {
    return products.find(p => p._id === id);
}

