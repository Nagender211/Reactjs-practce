import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import Login from './Login'
import Jobs from './Jobs'
import DeatilsJob from './DeatilsJob'

const JobbyApp = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/jobs' element={<Jobs />} />
        <Route exact path='/jobs/:id' element={<DeatilsJob />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  )
}

export default JobbyApp
