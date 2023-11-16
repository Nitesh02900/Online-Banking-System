// import carousel from "../images/banking_slider.png";

// const Carousel = () => {
//   return (
//     <div
//       id="carouselExampleCaptions"
//       className="carousel slide"
//       data-bs-ride="false"
//     >
//       <div className="carousel-indicators">
//         <button
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide-to="0"
//           className="active"
//           aria-current="true"
//           aria-label="Slide 1"
//         ></button>
//         <button
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide-to="1"
//           aria-label="Slide 2"
//         ></button>
//         <button
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide-to="2"
//           aria-label="Slide 3"
//         ></button>
//       </div>
//       <div className="carousel-inner">
//         <div className="carousel-item active">
//           <img src={carousel} className="d-block w-100" alt="..." />
//         </div>
//         <div className="carousel-item">
//           <img src={carousel} className="d-block w-100" alt="..." />
//         </div>
//         <div className="carousel-item">
//           <img src={carousel} className="d-block w-100" alt="..." />
//         </div>
//       </div>
//       <button
//         className="carousel-control-prev"
//         type="button"
//         data-bs-target="#carouselExampleCaptions"
//         data-bs-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button
//         className="carousel-control-next"
//         type="button"
//         data-bs-target="#carouselExampleCaptions"
//         data-bs-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default Carousel;
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../images/image1.PNG';
import image2 from '../images/image2.PNG';
import image3 from '../images/image3.PNG';

const items = [
  {
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: '1',
    src: image1
  },
  {
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: '2',
    src: image2
  },
  {
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: '3',
    src: image3
  }
];

const Carousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 1000, // Adjust the speed as needed
    rtl: true, // Set right-to-left direction
    slidesToShow: 1, // Display only one image at a time
    slidesToScroll: 1, // Move to the next image one at a time
  };

  return (
    <Slider {...settings}>
      {items.map(item => (
        <div key={item.key} style={{ height: '300px' }}>
          <img src={item.src} alt={item.altText} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
