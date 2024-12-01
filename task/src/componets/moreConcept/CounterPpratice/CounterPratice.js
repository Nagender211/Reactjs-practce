import React, { Component } from 'react'

class CounterPratice extends Component{
  state={
    count: 0
  }
  increment=()=>{
    this.setState(prev=>({
      count: prev.count + 1
    }))
  }
  decrement=()=>{
    const {count}=this.state
    if(count<=0){
      return this.setState(prev=>({
        count: 0
      }))
    }
    else{
      this.setState(prev=>({
        count: prev.count - 1
      }))
    }
    
  }
    render() {
     const {count}=this.state
      return (
        <div>
          <h2>Counter </h2>
          <h2>{count}</h2>
          <button onClick={this.increment}>increment</button>
          <button onClick={this.decrement}>decrement</button>
        </div>
      )
    }
}
export default CounterPratice
