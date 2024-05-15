import Banner from "../Header/Banner";
import FAQs from "../Layouts/FAQs";
import PopularServices from "../Layouts/PopularServices";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularServices></PopularServices>
            <FAQs></FAQs>
        </div>
    );
};

export default Home;