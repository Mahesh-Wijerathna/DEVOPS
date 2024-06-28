import React from "react";

import "./aboutUs.css";
import Footer from "./footer";


export default function AboutUs(){

    const backgroundStyles = {
       

        background: `url('./images/background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        height: "740px",
        padding: "90px"
         
      };
      const containerStyle = {
        background: `url('https://www.nttdata.com/global/en/-/media/nttdataglobal/1_images/about-us/aboutus_01.jpg?h=1108&iar=0&w=1660&rev=ecbc18f523fe4f009c6a46ebe97e356a')`, 
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        //background: 'rgba(247, 247, 247, 0.5)',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        border: '2px solid gray', 
      };
    
      const headingStyle = {
        color: 'black',
        textAlign: 'center',
        fontSize: '28px',
        
      };
    
      const paragraphStyle = {
        fontSize: '16px',
        color: '#555',
        marginBottom: '20px',
      };
    
      const contactInfoStyle = {
        marginBottom: '30px',
      };

      


    return(
        <div >
        <header style={backgroundStyles}>
        <div style={containerStyle}>
      
      <p style={{paragraphStyle,textAlign:"center"}}>
        <h1 style={{ textAlign: "center", color:"black"}}>About Introduction New Product</h1>
        We believe that life's most memorable moments are often intertwined with the products we use. Our journey began with a simple vision: to create products that seamlessly blend innovation and elegance, enhancing the way you live, work, and play.
      </p>

      <div style={contactInfoStyle}>
        <h2 style={{headingStyle , color:"black", textAlign:"center"} }>Our Story</h2>
        <p style={{paragraphStyle,textAlign:"center"}}>
           Founded by me, the New Product website emerged from a shared desire to push boundaries and 
redefine norms. With a dedication to excellence, I embarked on a mission to 
introduce new products that not only keep up with the times 
but also set the stage for what's next.
        </p>
      </div>

      <div style={contactInfoStyle}>
        <h2 style={{headingStyle , color:"black", textAlign:"center"}}>Join the introduction new product Community</h2>
        <p style={{paragraphStyle,textAlign:"center"}}>
           We invite you to be a part of our ever-growing community of forward-thinkers and 
tastemakers. As we continue to introduce the future, we're excited to have you 
with us on this remarkable journey. Welcome to New product website, 
where extraordinary products meet the extraordinary you.
<img src="https://img.freepik.com/free-photo/product-backdrop-cinematic-smoke-realistic-design_53876-128288.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1713398400&semt=sph" alt="Product Image" style={{ width: "100%", marginTop: "20px", opacity:"0.8", filter: "blur(2px)" }} />
        </p>
      </div>
    </div>
            
        </header>
        
    </div>
    )
}