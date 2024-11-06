import React from "react";
import HaircutImage from '../images/6.png'
import KidsImage from '../images/Untitled design (12).png'
import DyeImage from '../images/Untitled design (1).png'
import MassageImage from '../images/Untitled design (11).png'
import DeepImage from '../images/Untitled design (18).png'
import PrenatalImage from '../images/Untitled design (13).png'
import UnderarmImage from '../images/Untitled design (24).png'
import BikiniImage from '../images/Untitled design (21).png'
import BrazilianImage from '../images/Untitled design (7).png'
import PedicureImage from '../images/Untitled design (8).png'
import FacescrubImage from '../images/Untitled design (5).png'
import FullbodyImage from '../images/Untitled design (25).png'

function Services() {
  return (
    <div className="div-1">
    <hr />
    <div className="services" id="services">
      Our Services
    </div>
    <hr />
    <div className="services">Haircut</div>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <img src={HaircutImage} className="card-img-top" alt="kidsimage" />
          <div className="card-body">
            <h5 className="card-title" id="haircut">Men's Haircut</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={KidsImage} className="card-img-top" alt="✄" />
          <div className="card-body">
            <h5 className="card-title">Kid's Haircut</h5>
            <p className="card-text">
            Super Style Squad! Get a fun and fabulous kids' 
            haircut at our salon. Cool cuts, magical atmosphere, 
            and big smiles guaranteed. Ready for an epic hair adventure?
             Let's go!
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={DyeImage} className="card-img-top" alt="✄" />
          <div className="card-body">
            <h5 className="card-title">Black Dye</h5>
            <p className="card-text">
            Express Your True Colors! Unlock your style 
            potential with our vibrant hair dyes. From bold hues
             to stunning pastels, embrace the art of self-expression. 
             Dare to be uniquely you!
            </p>
          </div>
        </div>
      </div>
    </div>

    <hr />
    <div className="services" id="massage">Massage</div>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <img src={MassageImage} className="card-img-top" alt="✄" />
          <div className="card-body">
            <h5 className="card-title">Swedish Massage (1hr 15min)</h5>
            <p className="card-text">
            Indulge in blissful relaxation with our Swedish Massage. 
            Melt away stress, rejuvenate your body, and find tranquility 
            in every soothing stroke.
            </p>
          </div>
        </div>
      </div>
      
      <div className="col">
        <div className="card h-100">
          <img src={DeepImage} className="card-img-top" alt="✄" />
          <div className="card-body">
            <h5 className="card-title">Deep Tissue Massage</h5>
            <p className="card-text">
            Relieve tension and promote deep relaxation 
            with our invigorating Deep Tissue Massage. Discover
             true relief and rejuvenation in just one session.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={PrenatalImage} className="card-img-top" alt="✄" />
          <div className="card-body">
            <h5 className="card-title">Pre-Natal Massage</h5>
            <p className="card-text">
            Experience soothing care and nurturing support 
            during pregnancy with our specialized Prenatal Massage. 
            Enhance your well-being for a blissful journey.
            </p>
          </div>
        </div>
      </div>
    </div>

    <hr />
    <div className="services" id="waxing-services">Waxing Services</div>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <img src={UnderarmImage} className="card-img-top" alt="✄" />
          <div className="card-body">
            <h5 className="card-title">Underarm Waxing</h5>
            <p className="card-text">
            Stay smooth and confident with Underarm Waxing. 
            Quick and effective hair removal for a clean and fresh feeling.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={BikiniImage} className="card-img-top" alt="✄" />
          <div className="card-body">
            <h5 className="card-title">Bikini Waxing</h5>
            <p className="card-text">Get beach-ready with our Bikini Waxing. 
            Expert grooming for a flawless look and added confidence at the poolside.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={BrazilianImage} className="card-img-top" alt="✄" />
          <div className="card-body">
            <h5 className="card-title">Brazilian Waxing</h5>
            <p className="card-text">
            Achieve smooth confidence with our Brazilian Waxing service.
             Silky results for a polished look and a boost in self-assurance.
            </p>
          </div>
        </div>
      </div>
    </div>

    <hr />
    <div className="services" id="other-services">Other Services</div>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <img src={PedicureImage} className="card-img-top" alt="✄" />
          <div className="card-body">
            <h5 className="card-title">Pedicure</h5>
            <p className="card-text">
            Indulge in ultimate pampering with our Manicure and Pedicure.
             Treat your hands and feet to perfection for a blissful escape.
            </p>
          </div>
        </div>
      </div>
      
      
      <div className="col">
        <div className="card h-100">
          <img src={FacescrubImage} className="card-img-top" alt="✄" />
          <div className="card-body">
            <h5 className="card-title">Face Scrub</h5>
            <p className="card-text">
            Revitalize your skin with our Full Facial. Experience 
            deep cleansing and rejuvenation for a radiant and refreshed complexion.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={FullbodyImage} className="card-img-top" alt="✄" />
          <div className="card-body">
            <h5 className="card-title">Full Body Scrub</h5>
            <p className="card-text">
            Experience total renewal with our Full Body Scrub. 
            Exfoliate and rejuvenate for irresistibly smooth and glowing skin.





            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}

export default Services;
