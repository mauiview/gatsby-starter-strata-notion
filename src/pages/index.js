import React from 'react'
import Helmet from 'react-helmet'
import { Link } from "gatsby";

import Layout from '../components/layout'

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "A Site by Bradley P. White"
        const siteDescription = "A collection of my interests and explorations"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>This is my journey using a starter for Gatsby.js V2, demonstrating successful integration with notion as a CMS</h2>
                        </header>
                        <p>Based on the Strata site template, designed by HTML5 UP.<br />Integrated with <a href="https://conradlin.com/blog/posts/host-gatsbyjs-blog-with-notion-cms-and-netlify-for-free/" target="_blank">notion</a> as a CMS for demonstration purposes by <a href="https://conradlin.com" target="_blank">Conrad Lin</a></p>
                        <ul className="actions">
                            <li><a href="https://www.youtube.com/watch?v=dMYKXVf88J0" target="_blank" className="button">Learn More</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Recent Sharing</h2>

                        <ul className="actions">
                            <li><Link to={`blog`} className="button">All Articles</Link></li>
                            <li><Link to={`subscribe`} className="button">All Newsletters</Link></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Do you want to get in touch? Send me your thoughts though this contact form and we can exchange ideas.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        The White House<br />
                                        Massillon, Ohio<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        000-000-0000
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">lets.talk@bradleypwhite.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex