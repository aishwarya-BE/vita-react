import Navigation from './Nav';
import BriyaniCard from './Card';
import './App.css';

import { Routes, Route } from 'react-router-dom';

export default function App() {
    return (
            <>
            <Navigation />

            <Routes>
                

            <Route path="/" element={
                    <>
                        <h2 className="heading">Our Briyani Menu</h2>

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
                        <p>We serve delicious and tasty Briyani</p>
                    </div>
                } />


            </Routes>
            
        </>

    );

}
