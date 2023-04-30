import React from "react";
import footer from '../assets/images/footer-img.png'

function Footer() {
  return (
    <footer  style={{
      backgroundImage: `url(${footer})`
    }}>
      <div className="h-screen " >
        <div className=" h-[50%] flex items-center justify-center font-semibold text-[50px] text-white">
          <h2>Where Tradition meets Fashion</h2>
        </div>
        <div className="h-[50%] bg-slate-800 text-white flex items-center justify-center space-x-40 text-xl">
          <div className="col-md-3 col-sm-6">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Shipping &amp; Returns</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6">
            <h5>Address</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Location 1</a>
              </li>
              <li>
                <a href="#">Location 2</a>
              </li>
              <li>
                <a href="#">Location 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
