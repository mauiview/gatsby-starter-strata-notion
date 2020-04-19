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
                    <h1><strong>Welcome to Bradleywhite.com<br />template powered by <a href="https://conradlin.com/blog/posts/host-gatsbyjs-blog-with-notion-cms-and-netlify-for-free/" target="_blank">Notion</a></strong>,<br /> 
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
