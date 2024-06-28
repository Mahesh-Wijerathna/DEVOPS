import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import "./Desktop1.css";
import React from "react";
import { Link } from "react-router-dom";


/*<img src="image1.jpg" alt="Image 1" />
          <img src="image2.jpg" alt="Image 2" />*/
function Desktop1() {
  return (
    <header className="background-styles">
      <div className="header-container">
        <h1 className="ha">INTRODUCTION NEW PRODUCT</h1>
        <div>
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <div className="image-container">
          
        </div>
        <div >
          <p className="pa">
          We're thrilled to present a curated selection of cutting-edge products
          that redefine modern living. Our passion for innovation drives us to bring 
          you the latest technological, design, and functionality advancements. 
          With a commitment to quality and aesthetics, we invite you to explore our 
          range of new products that seamlessly integrate into your lifestyle.

          </p>
          
          <button className="learn-more">Learn More</button>

          
          <div className="image-row">
          <a href="image6-link" style={{ position: "relative" }}>
              <img src="./images/environment.jpg" alt="Image 6" className="image-size" />
              <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" , color:"white"}}>Environmental & Nature</span>
            </a>
            <a href="image6-link" style={{ position: "relative" }}>
              <img src="./images/fashion.jpg" alt="Image 7" className="image-size" />
              <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" ,color:"white" }}>Lifestyle & Fashion</span>
            </a>
            <a href="image6-link" style={{ position: "relative" }}>
              <img src="./images/food.jpg" alt="Image 8" className="image-size" />
              <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" ,color:"white"}}>Food & Drink</span>
            </a>
            <a href="image6-link" style={{ position: "relative" }}>
              <img src="./images/photography.jpg" alt="Image 9" className="image-size" />
              <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" ,color:"white" }}>Photography</span>
            </a>
            <a href="image6-link" style={{ position: "relative" }}>
              <img src="./images/technology.jpg" alt="Image 10" className="image-size" />
              <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" , color:"white"}}>Technology</span>
            </a>
            
          </div>
          
          
          
        </div>
      </div>
    </header>
  );
}

export default Desktop1;
