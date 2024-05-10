import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y , EffectFlip } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
const Banner = () => {
    return (
        <div className='mx-6 my-6'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y , EffectFlip]}
                spaceBetween={50}
                slidesPerView={1}
                effect="flip"
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/VDdzZ4m/shoulder-view-software-developers-programming-desktop-computer-startup-office-35674-15889.jpg
                    " alt="" className='w-full h-[90vh]'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/Xp9WncX/person-front-computer-working-html-23-2150038835.jpg" alt="" className='w-full h-[90vh]'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/tKJcsmK/rear-view-programmer-working-all-night-long-1098-18697.jpg" alt="" className='w-full h-[90vh]'/>
                </SwiperSlide>
                <SwiperSlide >
                    <img src="https://i.ibb.co/sqdBmGC/human-hand-typing-computer-keyboard-night-generated-by-ai-188544-31050.jpg" alt="" className='w-full h-[90vh]'/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
export default Banner;