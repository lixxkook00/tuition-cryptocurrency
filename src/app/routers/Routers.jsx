import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from '../domains/login'
import AdminDashboard from '../domains/admin'

export default function Routers() {
  return (
    <Routes>
        <Route exact path='/login' element = { <LoginForm /> } />

        <Route exact path='/admin' element = { <AdminDashboard /> } />
    </Routes>
  )
}
