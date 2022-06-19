import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Result from './Result'

const RoutePage = () => {
  return (
    <div className=' p-4'>
        <Routes>
            <Route path='/' element = { <Navigate to='/search' /> } />
            <Route path='/search' element = { <Result /> } />
            <Route path='/image' element = { <Result /> } />
            <Route path='/videos' element = { <Result /> } />
            <Route path='/news' element = { <Result /> } />
      </Routes>
    </div>
  )
}

export default RoutePage