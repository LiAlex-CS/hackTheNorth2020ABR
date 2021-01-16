import React from 'react';

const socialIcons = {
    fontSize: "20px"
}

const footerContainerStyle = {
    marginBottom: "40px"
}

function Footer(){
    return(
        <div className="footer">
            <div className="container" style={footerContainerStyle}>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <a href="http://instagram.com/">
                            <i className="fa fa-instagram social-icons " style={socialIcons}></i>
                        </a>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <a href="http://facebook.com/">
                            <i className="fa fa-facebook social-icons" style={socialIcons}></i>
                        </a>
                    </div>
                    <div className="col  d-flex justify-content-center">
                        <a href="http://youtube.com/">
                            <i className="fa fa-youtube social-icons" style={socialIcons}></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;