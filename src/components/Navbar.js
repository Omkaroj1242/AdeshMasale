import React from 'react'
import logo from '../utilities/logo-in.png'

const Navbar = () => {
    return (
        <>
            <nav className='Navbar px-5 d-flex justify-content-between'>
                <div className='logo'>
                    <img className='logo-img' src={logo} />
                </div>
                <div className='Menu me-3 d-flex align-items-center'>
                    <div className='page mx-3'>Home</div>
                    <div className='page mx-3'>Products</div>
                    <div className='page mx-3'>Gallery</div>
                    <div className='page mx-3'>About</div>
                    <div className='page mx-3'>Recipies</div>
                    <div className='page mx-3'>Contact</div>
                </div>
            </nav>
        </>
    )
}

export default Navbar