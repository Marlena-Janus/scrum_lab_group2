import React from "react";

const Footer = () => {
    return (
      <>
        <footer>
            <div className="footer">
                <div className=" footerColumn contact">
                    <h3>Lorem, ipsum dolor sit amet</h3>
                    <p>Lorem ipdsum dolor sit amet consectetur adipisicing elit. Architecto commodi ab quam, nemo qui accusantium omnis tempore id quis et ea nostrum atque?</p>
                </div>
                <div className="footerColumn activity">
                    <h3>Lorem, ipsum dolor sit amet</h3>
                    <ul>
                        <li>Lorem, ipsum dolor sit amet</li>
                        <li>Lorem, ipsum dolor sit amet</li>
                        <li>Lorem, ipsum dolor sit amet</li>
                        <li>Lorem, ipsum dolor sit amet</li>
                    </ul>
                </div>
                <div className="footerColumn socialMedia">
                    <h3>Lorem, ipsum dolor sit amet</h3>
                    <a href="#"> <i className="fab fa-facebook-square"></i></a>
                    <a href="#"><i className="fab fa-instagram-square"></i></a>
                    <a href="#"><i className="fab fa-twitter-square"></i></a>
                </div>
            </div>
            <div className="copyright">
                Copyright <span>ZaplanujJedzonko.pl</span>
            </div>
        </footer>
      </>
    );
  };
  
  export default Footer;