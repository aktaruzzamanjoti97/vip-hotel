import React from 'react';


const Footer = () => {
    return (
        <div className="container">
            <div className="text-center py-3">
                <footer>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.facebook.com"> Aktaruzzaman Joti </a>
                </footer>
            </div>
        </div>
    );
};

export default Footer;