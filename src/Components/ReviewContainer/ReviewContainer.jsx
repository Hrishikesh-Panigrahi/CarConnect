// ReviewContainer.jsx
import React from "react";
import "./ReviewContainer.css"; // Create a CSS file for styling
import { AiFillStar } from "react-icons/ai";

const ReviewContainer = ({ review }) => {
  return (
    <div className="singleReview grid">
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
