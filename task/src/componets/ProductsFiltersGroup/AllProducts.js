import React, { Component } from 'react'
import Products from './Products'
import Header from './Header'
import Cookies from 'js-cookie'
import SortedProducts from './SortedProducts'

const sortOption=[
    {
        optionsId: 1,
        displayNnmae: 'PRICE_HIGH'
    },
    {
        optionsId: 2,
        displayNnmae: 'PRICE_LOW'
    }
]

const categoryOptions=[
    {
        categoryId:	1,
    	name: 'Clothing'
    },
    {
        categoryId:    2,
        name: 'Electronics'
    },
    {
        categoryId: 3,
        name: 'Appliances'
    },
    {
        categoryId: 4,
        name: 'Grocey'
    },
    {
        categoryId: 5,
        name: 'Toys'
    }
]

const rataing=[
    {
        ratingId: 1,
        imageUrl: '1'
    },
    {
        ratingId: 2,
        imageUrl: '2'
    },
    {
        ratingId: 3,
        imageUrl: '3'
    },
    {
        ratingId: 4,
        imageUrl: '4'
    },
    
]
class AllProducts extends Component{
    state={
        productsList: [],
        actvieOption: sortOption[0].optionsId,
        activeCategory: categoryOptions[0].categoryId,
        activeRating: rataing[2].ratingId,
        searchText: ''

    }
    componentDidMount(){
        this.getApiData();
    }
    getApiData=async()=>{
        const {activeCategory,activeRating,actvieOption,searchText}=this.state
        const jwtToken=Cookies.get('jwt-token');

        const ulr=`https://apis.ccbp.in/products?sortBy=${actvieOption}&category=${activeCategory}&title_search=${searchText}&rating=${activeRating}`
        const options={
            
            headers: {
                Authorization: `Bearer ${jwtToken}`
            },
            method: 'GET',
        }
        const response=await fetch(ulr, options);
      
        if(response.ok===true){

            const data=await response.json();
            const update=data.products.map(product=>({
                brand: product.brand,
                id: product.id,
                imageUrl: product.image_url,
                price: product.price,
                rating: product.rating,
                title: product.title
            }))
            this.setState({productsList: update})


        }
    }
    updateSortProducts=(actvieOption,activeCategory,activeRating)=>{
        this.setState({actvieOption,activeCategory,activeRating},this.getApiData)
    }
    onhanddle=(e)=>{
        console.log(e.target.value)
        this.setState({
            searchText: e.target.value,
        },this.getApiData)
        
    }
    render() {
        const {productsList}=this.state;
        const {actvieOption,activeCategory,activeRating}=this.state


      return (
        <div>
            <Header />

            <input type='text' placeholder='please enter text....' onChange={this.onhanddle} />
            <SortedProducts 
            sortOption={sortOption}
            categoryOptions={categoryOptions} 
            rataing={rataing} 
            activeCategory={activeCategory} 
            actvieOption={actvieOption} 
            activeRating={activeRating} 
            update={this.updateSortProducts} />
          {productsList.map(each=>(
            <Products key={each.id} product={each}/>
          ))}
        </div>
      )
    }
}

export default AllProducts
