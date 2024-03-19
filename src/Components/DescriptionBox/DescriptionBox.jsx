import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An ecommerce website is an online platform that facilitates the buying
        and selling of goods and services over the internet. These websites
        allow businesses to showcase their products or services, and customers
        can browse through the offerings, add items to their cart, and complete
        transactions securely using various payment methods. Ecommerce websites
        typically include features such as product catalogs, search
        functionality, shopping carts, secure checkout processes, and often
        customer account management.</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
