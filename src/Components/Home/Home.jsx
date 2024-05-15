
import { Helmet } from "react-helmet";
import Banner from "../Header/Banner";
import FAQs from "../Layouts/FAQs";
import Gallery from "../Layouts/Gallery";
import PopularServices from "../Layouts/PopularServices";
import Reviews from "../Layouts/Reviews";

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Event Elevate</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Banner></Banner>
            <PopularServices></PopularServices>
            <FAQs></FAQs>
            <Reviews></Reviews>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;