import React from 'react'

const Footer = () => {
  return (
    <div>
<footer className="text-center text-lg-start   footer">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
            </div>
          <div>
            <a href className="me-4 text-reset">
              <i className="fab fa-facebook-f" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-twitter" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-google" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-instagram" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-linkedin" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-github" />
            </a>
          </div>
        </section>
        <section className>
          <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Information
                </h6>
                <p>
                  <a href="#!" className="text-reset">Special</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">New products</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Best sellers</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">About us</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Contact us</a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  My account
                </h6>
                <p>
                  <a href="#!" className="text-reset">My orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">My addresses</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">My credit slips</a>
                </p>
              
              </div>
              
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Store information
                </h6>
                <p><i className="fas fa-home me-3" /> New York, Brooklyn</p>
                <p>
                  
                  <i className="fas fa-phone me-3" />  Call us now:551231
                </p>
                <p><i className="fas fa-envelope me-3" />Email:dummymail@net.com</p>
                
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
          © 2022 Copyright:
          <a className="text-reset fw-bold" href="#">ecommerce.com</a>
        </div>
        {/* Copyright */}
      </footer>



    </div>
  )
}

export default Footer