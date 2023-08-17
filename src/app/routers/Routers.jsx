import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from '../layouts/login'

export default function Routers() {
  return (
    <Routes>

        <Route exact path='/' element = { <LoginForm /> } />
    </Routes>
  )
}
