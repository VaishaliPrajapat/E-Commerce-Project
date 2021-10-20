import React from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../scss/home.scss";
import Kids from "../static/Kids.jpeg";

const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    caption: "Select your new perfect style",
  },
  {
    url: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1549037173-e3b717902c57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    caption: "Slide 3",
  },
];
const Home = () => {
  return (
    <>
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
             
              <div className="bg_image_1">
                <div
                  className="bg_image_2"
                  style={{ backgroundImage: `url(${slideImage.url})` }}
                ></div>
                <div className="blackLayout"></div>
                <div
                  className="blurLayout"
                  style={{ backgroundImage: `url(${slideImage.url})` }}
                ></div>
                 <div className="shopNow">
                {/* <span className="caption">{slideImage.caption}</span> */}
                <Link key={Math.random} to="/productList">
                  <button className="btn_shop_now">Shop now</button>
                </Link>
              </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="images_home_container">
        <div className="img_container">
          <img
            src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            alt="Men"
          />
          <button>Men</button>
        </div>

        <div className="img_container">
          <img
            src="https://images.unsplash.com/photo-1509461641751-ed8c60422376?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            alt="Women"
          />
          <button>Women</button>
        </div>
        <div className="img_container">
          <img src={Kids} alt="Kids" />
          <button>Kids</button>
        </div>
      </div>
    </>
  );
};

export default Home;