import React, { Component } from 'react';
import Cookies from 'js-cookie';
import ProductDeatilsPost from './ProductDeatilsPost';
import { useParams } from 'react-router-dom';

class ProductDeatils extends Component {
    state = {
        ProductDeatilsList: [],
    };

    componentDidMount() {
        this.getApiDdata();
    }

    getApiDdata = async () => {
        const { id } = this.props;
        const jwtToken = Cookies.get('jwt-token');
        const url = `https://apis.ccbp.in/products/${id}`;
        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
            method: 'GET',
        };
        
        try {
            const response = await fetch(url, options);
            if (response.ok) {
                const data = await response.json();
                
                // Log the API response to understand its structure
                console.log('API Response:', data);

                // Check if `products` exists and is an array
                if (data.products && Array.isArray(data.products)) {
                    const updateData = data.products.map((product) => ({
                        id: product.id,
                        rating: product.rating,
                        imageUrl: product.image_url, // Adjust field name if needed
                        price: product.price,
                        brand: product.brand,
                        title: product.title,
                    }));
                    this.setState({ ProductDeatilsList: updateData });
                } 
                // If `products` is not an array but there's data
                else if (data && data.id) {
                    const updateData = {
                        id: data.id,
                        rating: data.rating,
                        imageUrl: data.image_url, // Adjust field names if necessary
                        price: data.price,
                        brand: data.brand,
                        title: data.title,
                    };
                    this.setState({ ProductDeatilsList: [updateData] }); // Wrap in array
                } else {
                    // Handle case when no product details are found
                    console.warn('Products array or valid product data not found in response:', data);
                }
            } else {
                console.error('Failed to fetch product details:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };

    render() {
        const { ProductDeatilsList } = this.state;

        return (
            <div>
                {ProductDeatilsList.length > 0 ? (
                    ProductDeatilsList.map((item) => (
                        <ProductDeatilsPost item={item} key={item.id} />
                    ))
                ) : (
                    <p>No product details available.</p>
                )}
            </div>
        );
    }
}

const BlogDetailsWithParams = (props) => {
    const { id } = useParams();
    return <ProductDeatils {...props} id={id} />;
};

export default BlogDetailsWithParams;
