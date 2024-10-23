import React, { Component } from 'react';
import Header from './Header';
import AllProducts from './AllProducts';
import Cookies from 'js-cookie';
import SortPrdodut from './SortPrdodut';

const sortOption = [
    {
        optionsId: 1,
        displayNnmae: 'PRICE_HIGH',
    },
    {
        optionsId: 2,
        displayNnmae: 'PRICE_LOW',
    },
];

const categoryOptions = [
    {
        categoryId: 1,
        name: 'Clothing',
    },
    {
        categoryId: 2,
        name: 'Electronics',
    },
    {
        categoryId: 3,
        name: 'Appliances',
    },
    {
        categoryId: 4,
        name: 'Grocey',
    },
    {
        categoryId: 5,
        name: 'Toys',
    },
];

const rataing = [
    {
        ratingId: 1,
        imageUrl: '1',
    },
    {
        ratingId: 2,
        imageUrl: '2',
    },
    {
        ratingId: 3,
        imageUrl: '3',
    },
    {
        ratingId: 4,
        imageUrl: '4',
    },
];

class Product extends Component {
    state = {
        productList: [],
        actvieOption: sortOption[0].optionsId,
        activeCategory: categoryOptions[0].categoryId,
        searchText: '',
        activeRating: rataing[2].ratingId,
    };

    componentDidMount() {
        this.getApiData();
    }

    getApiData = async () => {
        const { actvieOption, activeCategory, searchText, activeRating } = this.state;
        const jwtToken = Cookies.get('jwt-token');
        const url = `https://apis.ccbp.in/products?sortBy=${actvieOption}&category=${activeCategory}&title_search=${searchText}&rating=${activeRating}`;
        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
            method: 'GET',
        };
        const response = await fetch(url, options);
        if (response.ok === true) {
            const data = await response.json();
            const update = data.products.map((product) => ({
                brand: product.brand,
                id: product.id,
                imageUrl: product.image_url,
                price: product.price,
                rating: product.rating,
                title: product.title,
            }));
            this.setState({ productList: update });
        }
    };

    updateSortProducts = (actvieOption, activeCategory, activeRating) => {
        this.setState({ actvieOption, activeCategory, activeRating }, this.getApiData);
    };
    updateId=(id)=>{
        console.log(id);
        // this.setState({ productId: id });
        // this.getProductDetails(id);

    }

    render() {
        const { productList, activeCategory, activeRating, actvieOption } = this.state;
        return (
            <div>
                <Header />
                <SortPrdodut
                    sortOption={sortOption}
                    categoryOptions={categoryOptions}
                    rataing={rataing}
                    activeCategory={activeCategory}
                    activeRating={activeRating}
                    actvieOption={actvieOption}
                    updateSortProducts={this.updateSortProducts}
                />
                {productList.map((product) => (
                    <AllProducts key={product.id} product={product} updateId={this.updateId}/>
                ))}
            </div>
        );
    }
}

export default Product;
