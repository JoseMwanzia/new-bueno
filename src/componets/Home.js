import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FirstImage from '../images/6.png';
import SecondImage from '../images/3.png';
import ThirdImage from '../images/171.png';

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} id='home'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={FirstImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Discover Our Online Barbershop Services</p>
          <p>Get the Freshest Look.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='image'>
        <img
          className="d-block w-100"
          src={SecondImage}
          alt="Second slide"
        />

        <Carousel.Caption>
          <p></p>
          <p>Expert Barbers at Your Fingertips</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='image'>
        <img
          className="d-block w-100"
          src={ThirdImage}
          alt="Third slide"
        />

        <Carousel.Caption>
          <p></p>
          <p>
          Personalized Grooming for the Modern Man
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;