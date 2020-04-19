import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/bradleypwhite" target="_blank" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/mauiview" target="_blank" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://instagram.com/mauiview" target="_blank" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="https://www.flickr.com/photos/supersizeyourhealth" target="_blank" className="icon fa-flickr"><span className="label">Flickr</span></a></li>
                        <li><a href="https://www.linkedin.com/in/bradleywhiterph/" target="_blank" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://www.facebook.com/bradley.white" target="_blank" className="icon fa-facebook"><span className="label">
                            Facebook</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Gatsby Starter Strata</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
