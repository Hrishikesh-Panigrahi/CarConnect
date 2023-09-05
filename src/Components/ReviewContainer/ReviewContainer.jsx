import React, {useEffect}  from "react";
import "./ReviewContainer.css"; 

import Aos from "aos";
import "aos/dist/aos.css" 

import { AiFillStar } from "react-icons/ai";

const ReviewContainer = ({ review }) => { 
 
  useEffect(() => {
    Aos.init({duration: 3000});
  }, []) 
 
  return (
    <div data-aos='fade-up' className="singleReview grid">
      <div className="imgDiv">
        <img src={review.image} alt="CarImage" />
      </div>
      <h5 className="reviewTitle">{review.title}</h5>
      <span className="desc">{review.description}</span>

      <div className="reviewerDiv flex">
        <div className="leftDiv flex">
          <div className="reviewerImage">
            <img src={review.reviewerImage} alt="ReviewerImage" />
          </div>
          <div className="aboutReviewer">
            <span className="name">{review.reviewerName}</span>
            <p>{review.reviewerRole}</p>
          </div>
        </div>

        <div className="rightDiv flex">
          <AiFillStar className="icon" />
          <blockquote>{review.stars}</blockquote>
        </div>
      </div>
    </div>
  );
};

export default ReviewContainer;
