import PropTypes from 'prop-types';

const Review = ({ review }) => {
    const { name, rating, reviews , picture} = review;
    return (
        <div  className= " text-lg border-2 shadow-xl rounded-xl bg-white/35 p-6">
            <img src={picture} alt="" className="h-20 w-20 rounded-full my-4 border-2 shadow-xl"/>
            <div className="space-y-3 ">
                <div className="flex gap-16">
                <h2 className="font-medium flex gap-2 items-center"><img src="https://i.ibb.co/TTbpFMx/complain.png" alt="" className="h-4 w-4" />{name}</h2>
                <p className="font-medium flex gap-2 items-center"><img src="https://i.ibb.co/v4K8tvS/star.png" alt="" className="h-4 w-4" />{rating}</p>
                </div>
                <p>{reviews}</p>
            </div>
        </div>
    );
};

Review.propTypes = {
    review: PropTypes.array,
}


export default Review;
