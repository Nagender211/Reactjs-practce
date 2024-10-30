import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CounterPratice from './CounterPpratice/CounterPratice'
import Post from './Postpratice/Post'
import SetState from './setState/SetState'
import Notfound from './Notfound'
import Header from './Header'


const MoreReact = () => {
  return (
    <div>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route exact path='/counter' element={<CounterPratice />} />
            <Route exact path='/post' element={<Post />} />
            <Route exact path='setState' element={<SetState />} />
            <Route path='*' element={<Notfound />} />
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default MoreReact
