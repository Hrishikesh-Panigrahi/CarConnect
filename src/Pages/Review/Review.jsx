import React from "react";
import "./Review.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const Review = () => {
  return (
    <div className="review section">
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">Recent Reviews</h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>

        <div className="reviewContainer grid">
          <div className="singleReview grid">
            <div className="imgDiv">
              <img src="" alt="CarImage" />
            </div>
            <h5 className="reviewTitle">2023</h5>
            <span className="desc">good Cars are op</span>

            <div className="reviewerDiv flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
