import React, { Component } from 'react'

const list=[
    {
        id: 1,
        name: 'Apple',
        price: 10,
        quantity: 5
    },
    {
        id: 2,
        name: 'Banana',
        price: 5,
        quantity: 10
    },
    {
        id: 3,
        name: 'Orange',
        price: 15,
        quantity: 8
    }
]
class SearchState extends Component{
    state={
        searchTerm: '',
        filteredProducts: list
    }
    handdleInput=(e)=>{
        console.log(e.target.value)
        this.setState({
            searchTerm: e.target.value,
            filteredProducts: list.filter(product=>product.name.toLowerCase().includes(e.target.value.toLowerCase()))
        })
    }
    render() {
        const {filteredProducts}=this.state
        
      return (
        <div>
            
            <input type='text' placeholder='please type anything for serach....' onChange={this.handdleInput} />
            {filteredProducts.map(each=>(
                <div key={each.id}>{each.name} - {each.price} - {each.quantity}</div>
            ))}



          
        </div>
      )
    }
}

export default SearchState;
