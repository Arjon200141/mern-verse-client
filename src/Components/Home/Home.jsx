import Banner from "../Header/Banner";
import FAQs from "../Layouts/FAQs";
import PopularServices from "../Layouts/PopularServices";
import Reviews from "../Layouts/Reviews";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularServices></PopularServices>
            <FAQs></FAQs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;