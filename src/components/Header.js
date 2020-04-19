import React from 'react'
import { Link } from "gatsby";
import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <Link to="/" className="image avatar"><img src={avatar} alt="" /></Link>
                    <a href="https://bradleywhite.com/blog" target="_blank">Blog</a><br /> 
                    <a href="https://bradleywhite.com/about" target="_blank">About</a><br>
                    <a href="https://bradleywhite.com/projects" target="_blank">Projects</a></br>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
