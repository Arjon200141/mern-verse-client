import { useEffect, useState } from "react";
import Review from "./Review";


const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("review.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="my-20 mx-8">
            <h2 className="text-5xl font-bold text-center my-8">Our Reviewers</h2>
            <p className="text-xl text-center mx-6 my-4">Reviews of Event emphasize the exceptional quality of art supplies and the welcoming atmosphere for artists of all skill levels. Customers often commend the knowledgeable staff and the inspiring selection of products, making it a favorite destination for art enthusiasts.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mx-12 my-8">
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;