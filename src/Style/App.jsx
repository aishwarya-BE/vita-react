
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navigation from './Nav'
import BriyaniCard from './Card'
import Login from './Login'
import Dashboard from './Dashboard'
import ProtectedRoute from './ProtectedRoute'

import './App.css'

export default function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn")==="true"
    )

    const handleLogin=()=> {
        localStorage.setItem("isLoggedIn","true")
        setIsLoggedIn(true)
    }

    const handleLogout=() =>{
        localStorage.removeItem("isLoggedIn")
        setIsLoggedIn(false)
    }

    return (
        <>
            <Navigation
                isLoggedIn={isLoggedIn}
                onLogout={handleLogout}
            />
            <Routes>
                <Route path="/" element={
                    <>
                        <h2 className="heading">
                            Our Briyani Menu
                        </h2>

                        <p className="description">
                            Explore our delicious Briyani varieties!
                        </p>

                        <BriyaniCard />
                    </>
                } />

                <Route path="/about" element={
                    <div className="container mt-5">
                        <h2>About Us</h2>
                        <p>Welcome to Briyani House!</p>
                    </div>
                } />

                <Route path="/login" element={
                    <Login onLogin={handleLogin} />
                } />

                <Route path="/dashboard" element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                        <Dashboard />
                    </ProtectedRoute>
                } />

            </Routes>

        </>
    )
}
