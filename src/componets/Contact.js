import React from "react";

function Contact() {

  const currentYear = new Date().getFullYear()
  return (
    <div className="footer-clean" id="contacts">
      <footer>
        <div className="container">
          <div className="row justify-content-center">
          <div className="col-sm-4 col-md-3 item">
              <h3>About</h3>
                <p href="#home">This is Bueno Barbers. We are a team of 
                haircut profesionals dedicated to the craft of hair cutting</p>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#haircut">Men's Haircut</a>
                </li>
                <li>
                  <a href="#massage">Massage</a>
                </li>
                <li>
                  <a href="#waxing-services">Waxing Services</a>
                </li>
                <li>
                  <a href="#other-services">Other Services</a>
                </li>
              </ul>
            </div>
            
            <div className="col-sm-4 col-md-3 item">
              <h3>Contacts</h3>
              <ul>
                <li>
                  <span>Call 0768 660 446</span>
                </li>
                
              </ul>
            </div>
            <div className="col-lg-3 item social">
              <a href="https://www.instagram.com/buenobarberske/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
                {/* <img href={Instagram} alt="instagram"></img> */}
              </a>
              <a href="#home">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#home">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#home">
                <i className="fab fa-whatsapp"></i>
              </a>
              <p className="copyright">Bueno Barbers © {currentYear}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
