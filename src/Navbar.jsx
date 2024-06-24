
import React, { useRef, useState } from 'react'
import { links ,social } from './data'
import logo from './logo.svg'
import { FaBars } from 'react-icons/fa'
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';



const Navbar = () => {

const [showLinks, setShowLinks] = useState(false);
const linksRef=useRef(null)
const linksContainerRef=useRef(null)
const falink=[FaBehance, FaFacebook, FaLinkedin, FaTwitter]
    function toggleLinks() {
        setShowLinks(condition=>!condition)
    }

    const linkstyle = {
        height: showLinks?`${linksRef.current.getBoundingClientRect().height}px`:'0px'
    }
    return (
        <div className='nav-center'>

            <div className="nav-header">
                <img src={logo} alt="logo image" />

                <ul className="links" ref={linksRef}>

                    {links.map((link) => {
                        return (
                            <li  key={link.id}>{link.text}</li>
                        )
                    })}



                </ul>

                <ul className="social-links">

                    {social.map((link,index) => {
                         const { id, url, icon } = link;
                        return (
                            <li key={link.id}> 
                            <a href={url}>{icon}</a>
                             </li>
                        )
                    })}



                </ul>

                <button className='toggle-button' onClick={toggleLinks}>
                    <FaBars />
                </button>



            </div>




        </div>
    )
}
export default Navbar;  
