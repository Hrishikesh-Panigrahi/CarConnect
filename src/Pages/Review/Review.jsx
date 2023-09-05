import React, {useEffect} from "react";
import "./Review.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import ReviewContainer from "../../Components/ReviewContainer/ReviewContainer";

import carReview1 from "../../assets/Car_Review1.jpg"
import carReview2 from "../../assets/Car_Review2.jpg"
import carReview3 from "../../assets/Car_Review3.jpg"

import user_1 from "../../assets/user_1.jpg"
import user_2 from "../../assets/user_2.jpeg"
import user_3 from "../../assets/user_3.jpeg"
import Aos from "aos";
import "aos/dist/aos.css"


const Review = () => {
 useEffect(() => {
    Aos.init({duration: 3000});
  }, [])
  const reviews = [
    {
      title: "2023 Honda",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      image: carReview1,
      reviewerName: "Hrishikesh Panigrahi",
      reviewerRole: "Chief Editor",
      reviewerImage: user_1,
      stars: 4.3,
    },
    {
      title: "2022 Mercedes",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      image: carReview2,
      reviewerName: "Sarah Johnson",
      reviewerRole: "Customer",
      reviewerImage: user_2,
      stars: 4.5,
    },
    {
      title: "2022 Audi",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      image: carReview3,
      reviewerName: "Bunty",
      reviewerRole: "Customer",
      reviewerImage: user_3,
      stars: 4.6,
    },
  ];
  
  return (
    <div className="review section">
      <div className="secContainer container">
        <div data-aos='fade-up' className="secHeading flex">
          <h3 className="secTitle">Recent Reviews</h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>

        <div className="reviewContainer grid">
          {reviews.map((review, index) => (
            <ReviewContainer review={review} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
